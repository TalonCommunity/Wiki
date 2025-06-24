const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

module.exports = function(context, options) {
  return {
    name: 'repo-data-plugin',
    async loadContent() {
      const cacheFile = path.join(__dirname, '../.docusaurus/repo-data-plugin/default/repos.json');

      // Load omit configuration from repo-explorer-omit-list.json
      let omitRepos = [];

      try {
        const omitListFile = path.join(__dirname, 'repo-data-omit-list.json');
        if (fs.existsSync(omitListFile)) {
          const omitConfig = JSON.parse(fs.readFileSync(omitListFile, 'utf8'));
          if (omitConfig.omitRepos && Array.isArray(omitConfig.omitRepos)) {
            omitRepos = omitConfig.omitRepos;
          }
        }
      } catch (error) {
        console.warn('Failed to load repo-data-omit-list.json:', error.message);
      }

      // Remove duplicates and normalize
      omitRepos = [...new Set(omitRepos.map(repo => repo.toLowerCase()))];

      if (omitRepos.length > 0) {
        console.log(`Repository omit list loaded: ${omitRepos.length} repositories will be excluded`);
      }      // Determine if we should fetch fresh data
      const isUpdateRepos =
        process.env.npm_config_argv && JSON.parse(process.env.npm_config_argv).original.includes('update-repos') || // npm run update-repos
        process.env.npm_lifecycle_event === 'update-repos' ||    // Direct npm run update-repos
        process.argv.some(arg => arg.includes('update-repos')) || // Command line contains update-repos
        process.argv.includes('--fetch-repos');                  // Explicit command line flag

      const shouldFetch =
        isUpdateRepos ||                                          // Explicit update request
        process.env.FETCH_REPOS === 'true' ||                    // Environment variable
        process.env.GITHUB_REF === 'refs/heads/main' ||          // Main branch deployment
        process.env.CI === 'true' && process.env.GITHUB_EVENT_NAME === 'schedule' || // Scheduled CI
        !fs.existsSync(cacheFile);                               // No cached data exists      // Try to use cached data if we shouldn't fetch
      if (!shouldFetch) {
        console.log('Using cached repository data (no fresh fetch needed)');
        try {
          if (fs.existsSync(cacheFile)) {
            console.log('Using cached repository data (add --fetch-repos to update)');
            const cachedData = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));

            // Apply current omit list to cached data
            const filteredRepos = cachedData.repositories.filter(repo => {
              const fullName = repo.full_name.toLowerCase();
              return !omitRepos.includes(fullName);
            });

            console.log(`Loaded ${filteredRepos.length} repositories from cache (generated at ${cachedData.generated_at})`);
            if (filteredRepos.length !== cachedData.repositories.length) {
              console.log(`Applied current omit list: ${cachedData.repositories.length - filteredRepos.length} repositories filtered out`);
            }

            return {
              ...cachedData,
              repositories: filteredRepos,
              filtered_count: filteredRepos.length,
              omitted_count: (cachedData.repositories.length || 0) - filteredRepos.length
            };
          }
        } catch (error) {
          console.warn('Failed to read cached data, falling back to fresh fetch:', error.message);
        }
      }

      try {
        console.log('Fetching fresh Talon repositories from GitHub...');
        const response = await fetch(
          'https://api.github.com/search/repositories?q=topic:talonvoice&sort=stars&order=desc&per_page=100',
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json',
              'User-Agent': 'TalonWiki/1.0',
              // Add GitHub token if available for higher rate limits
              ...(process.env.GITHUB_TOKEN && {
                'Authorization': `token ${process.env.GITHUB_TOKEN}`
              })
            }
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(`Successfully fetched ${data.items.length} repositories`);

        // Filter out omitted repositories
        const filteredRepos = data.items.filter(repo => {
          const fullName = repo.full_name.toLowerCase();
          const isOmitted = omitRepos.includes(fullName);
          if (isOmitted) {
            console.log(`Omitting repository: ${repo.full_name}`);
          }
          return !isOmitted;
        });

        console.log(`After filtering: ${filteredRepos.length} repositories (${data.items.length - filteredRepos.length} omitted)`);

        return {
          repositories: filteredRepos,
          total_count: data.total_count,
          filtered_count: filteredRepos.length,
          omitted_count: data.items.length - filteredRepos.length,
          generated_at: new Date().toISOString()
        };
      } catch (error) {
        console.error('Failed to fetch repository data:', error);

        // Try to use cached data as fallback
        try {
          if (fs.existsSync(cacheFile)) {
            console.warn('Using cached data as fallback...');
            const cachedData = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));

            // Apply current omit list to fallback cached data
            const filteredRepos = cachedData.repositories.filter(repo => {
              const fullName = repo.full_name.toLowerCase();
              return !omitRepos.includes(fullName);
            });

            return {
              ...cachedData,
              repositories: filteredRepos,
              filtered_count: filteredRepos.length,
              omitted_count: (cachedData.repositories.length || 0) - filteredRepos.length,
              error: `Build-time fetch failed: ${error.message}. Using cached data.`
            };
          }
        } catch (cacheError) {
          console.error('Failed to read cached data:', cacheError);
        }

        // Return empty data instead of failing the build
        return {
          repositories: [],
          total_count: 0,
          generated_at: new Date().toISOString(),
          error: error.message
        };
      }
    },

    async contentLoaded({content, actions}) {
      const {createData} = actions;
      // Create a JSON file that can be imported by components
      await createData('repos.json', JSON.stringify(content));
    },
  };
};
