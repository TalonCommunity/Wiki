import React, { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
// @ts-ignore
import repoData from "@generated/repo-data-plugin/default/repos.json";

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface RepoData {
  repositories: GitHubRepo[];
  total_count: number;
  generated_at: string;
  error?: string;
}

const RepoExplorer: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"stars" | "updated" | "name">("stars");
  const [viewMode, setViewMode] = useState<"compact" | "expanded">("compact");
  const [showAllTags, setShowAllTags] = useState(false);

  useEffect(() => {
    // Load data from build-time generated JSON
    try {
      const data: RepoData = repoData;

      if (data.error) {
        setError(`Build-time data fetch failed: ${data.error}`);
      } else {
        setRepos(data.repositories);
        console.log(
          `Loaded ${data.repositories.length} repositories (generated at ${data.generated_at})`,
        );
      }
    } catch (err) {
      setError("Failed to load repository data");
      console.error("Error loading repo data:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const filteredAndSortedRepos = React.useMemo(() => {
    let filtered = repos.filter((repo) => {
      const matchesSearch =
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (repo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ??
          false) ||
        repo.owner.login.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLanguage =
        selectedLanguage === "all" || repo.language === selectedLanguage;
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => repo.topics.includes(tag));
      return matchesSearch && matchesLanguage && matchesTags;
    }); // Sort repositories
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "stars":
          return b.stargazers_count - a.stargazers_count;
        case "updated":
          return (
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          );
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [repos, searchTerm, selectedLanguage, selectedTags, sortBy]);

  const languages = React.useMemo(() => {
    return Array.from(
      new Set(repos.map((repo) => repo.language).filter(Boolean)),
    ).sort();
  }, [repos]);

  // Get all unique tags with counts, excluding 'talonvoice' and 'talon'
  const tagStats = React.useMemo(() => {
    const tagCounts = new Map<string, number>();
    repos.forEach((repo) => {
      repo.topics
        .filter((topic) => topic !== "talonvoice" && topic !== "talon")
        .forEach((topic) => {
          tagCounts.set(topic, (tagCounts.get(topic) || 0) + 1);
        });
    });

    return Array.from(tagCounts.entries())
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count); // Sort by count descending
  }, [repos]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedLanguage("all");
    setSelectedTags([]);
  };

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(dateString));
  };
  const getLanguageColor = (language: string | null): string => {
    if (!language) return "#858585";

    const colors: Record<string, string> = {
      Python: "#3776ab",
      JavaScript: "#f7df1e",
      TypeScript: "#3178c6",
      Shell: "#4ade80", // Better contrast green
      Go: "#00add8",
      Rust: "#dea584",
      HTML: "#e34c26",
      CSS: "#1572b6",
      Java: "#ed8b00",
      "C++": "#f34b7d",
      C: "#6b7280",
      Ruby: "#cc342d",
      PHP: "#4f5d95",
      "C#": "#22c55e", // Better contrast green
      Swift: "#fa7343",
      Kotlin: "#7f52ff",
      Lua: "#2c2d72",
      "Vim Script": "#22c55e", // Better contrast green
      "Emacs Lisp": "#863a9e",
    };

    return colors[language] || "#6b6b6b";
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading repositories...</p>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h3>Error loading repositories</h3>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className={styles.retryButton}
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search repositories, descriptions, or authors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
            aria-label="Search repositories, descriptions, or authors"
          />
        </div>
        <div className={styles.sortContainer}>
          {" "}
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "stars" | "updated" | "name")
            }
            className={styles.sortSelect}
            aria-label="Sort repositories"
          >
            <option value="stars">Most Stars</option>
            <option value="updated">Recently Updated</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>
        <div className={styles.viewToggle}>
          <button
            onClick={() => setViewMode("compact")}
            className={clsx(
              styles.viewButton,
              viewMode === "compact" && styles.viewButtonActive,
            )}
            title="Compact view"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="1" y="2" width="14" height="2" rx="1" />
              <rect x="1" y="6" width="14" height="2" rx="1" />
              <rect x="1" y="10" width="14" height="2" rx="1" />
              <rect x="1" y="14" width="14" height="2" rx="1" />
            </svg>
          </button>
          <button
            onClick={() => setViewMode("expanded")}
            className={clsx(
              styles.viewButton,
              viewMode === "expanded" && styles.viewButtonActive,
            )}
            title="Expanded view"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="1" y="1" width="6" height="6" rx="1" />
              <rect x="9" y="1" width="6" height="6" rx="1" />
              <rect x="1" y="9" width="6" height="6" rx="1" />
              <rect x="9" y="9" width="6" height="6" rx="1" />
            </svg>
          </button>
        </div>
      </div>
      {/* Tag Filter Section */}
      <div className={styles.tagFilters}>
        <div className={styles.tagFiltersHeader}>
          <h2 className={styles.tagFiltersTitle}>Filter by Tags</h2>
          {(selectedTags.length > 0 ||
            searchTerm ||
            selectedLanguage !== "all") && (
            <button onClick={clearAllFilters} className={styles.clearFilters}>
              Clear all filters
            </button>
          )}
        </div>
        <div className={styles.tagContainer}>
          {(showAllTags ? tagStats : tagStats.slice(0, 12)).map(
            ({ tag, count }) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={clsx(
                  styles.tagFilter,
                  styles.tagGeneric,
                  selectedTags.includes(tag) && styles.tagGenericActive,
                  selectedTags.includes(tag) && styles.tagFilterActive,
                )}
              >
                {tag} ({count})
              </button>
            ),
          )}
          {tagStats.length > 12 && (
            <button
              onClick={() => setShowAllTags(!showAllTags)}
              className={styles.expandTagsButton}
            >
              {showAllTags ? `Show less` : `Show all ${tagStats.length} tags`}
            </button>
          )}
        </div>
      </div>
      <div className={styles.stats}>
        <p>
          Showing <strong>{filteredAndSortedRepos.length}</strong> of{" "}
          <strong>{repos.length}</strong> repositories
          {searchTerm && ` matching "${searchTerm}"`}
          {selectedLanguage !== "all" && ` in ${selectedLanguage}`}
          {selectedTags.length > 0 && ` with tags: ${selectedTags.join(", ")}`}
        </p>
      </div>{" "}
      <div
        className={clsx(
          styles.grid,
          viewMode === "compact" && styles.gridCompact,
        )}
      >
        {filteredAndSortedRepos.map((repo) => (
          <div
            key={repo.id}
            className={clsx(
              styles.card,
              viewMode === "compact" && styles.cardCompact,
            )}
          >
            {viewMode === "expanded" ? (
              // Expanded card view (original design)
              <>
                <div className={styles.cardHeader}>
                  <div className={styles.repoInfo}>
                    <img
                      src={repo.owner.avatar_url}
                      alt={`${repo.owner.login} avatar`}
                      className={styles.avatar}
                    />
                    <div className={styles.repoDetails}>
                      <h3 className={styles.repoName}>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.repoLink}
                        >
                          {repo.name}
                        </a>
                      </h3>
                      <p className={styles.repoOwner}>by {repo.owner.login}</p>
                    </div>
                  </div>
                  <div className={styles.stars}>
                    <span className={styles.starIcon}>⭐</span>
                    <span className={styles.starCount}>
                      {repo.stargazers_count}
                    </span>
                  </div>
                </div>

                <p className={styles.description}>
                  {repo.description || "No description available"}
                </p>

                <div className={styles.cardFooter}>
                  <div className={styles.metadata}>
                    {/* language */}
                    {/* {repo.language && (
                      <span
                        className={styles.language}
                        style={{
                          backgroundColor: getLanguageColor(repo.language),
                          color:
                            repo.language === "JavaScript" ? "#000" : "#fff",
                        }}
                      >
                        {repo.language}
                      </span>
                    )} */}
                    <span className={styles.updated}>
                      Updated {formatDate(repo.updated_at)}
                    </span>
                  </div>{" "}
                  {repo.topics.filter(
                    (topic) => topic !== "talonvoice" && topic !== "talon",
                  ).length > 0 && (
                    <div className={styles.topics}>
                      {repo.topics
                        .filter(
                          (topic) =>
                            topic !== "talonvoice" && topic !== "talon",
                        )
                        .slice(0, 4)
                        .map((topic) => (
                          <button
                            key={topic}
                            className={clsx(
                              styles.topic,
                              styles.tagGeneric,
                              selectedTags.includes(topic) &&
                                styles.tagGenericActive,
                              selectedTags.includes(topic) &&
                                styles.topicActive,
                            )}
                            onClick={() => toggleTag(topic)}
                            title={`Filter by ${topic}`}
                          >
                            {topic}
                          </button>
                        ))}
                      {repo.topics.filter(
                        (topic) => topic !== "talonvoice" && topic !== "talon",
                      ).length > 4 && (
                        <span className={styles.topicMore}>
                          +
                          {repo.topics.filter(
                            (topic) =>
                              topic !== "talonvoice" && topic !== "talon",
                          ).length - 4}{" "}
                          more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </>
            ) : (
              // Compact card view
              <>
                <div className={styles.cardHeaderCompact}>
                  <div className={styles.repoInfoCompact}>
                    <img
                      src={repo.owner.avatar_url}
                      alt={`${repo.owner.login} avatar`}
                      className={styles.avatarCompact}
                    />
                    <div className={styles.repoDetailsCompact}>
                      <h3 className={styles.repoNameCompact}>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.repoLink}
                        >
                          {repo.name}
                        </a>
                      </h3>
                      <p className={styles.repoOwnerCompact}>
                        by {repo.owner.login}
                      </p>
                    </div>
                  </div>
                  <div className={styles.starsCompact}>
                    <span className={styles.starIcon}>⭐</span>
                    <span className={styles.starCount}>
                      {repo.stargazers_count}
                    </span>
                  </div>
                </div>

                <p className={styles.descriptionCompact}>
                  {repo.description || "No description available"}
                </p>

                <div className={styles.metadataCompact}>
                  {/* Language */}
                  {/* {repo.language && (
                    <span
                      className={styles.languageCompact}
                      style={{
                        backgroundColor: getLanguageColor(repo.language),
                        color: repo.language === "JavaScript" ? "#000" : "#fff",
                      }}
                    >
                      {repo.language}
                    </span>
                  )} */}
                  <span className={styles.updatedCompact}>
                    {formatDate(repo.updated_at)}
                  </span>{" "}
                  {repo.topics.filter(
                    (topic) => topic !== "talonvoice" && topic !== "talon",
                  ).length > 0 && (
                    <div className={styles.topicsCompact}>
                      {repo.topics
                        .filter(
                          (topic) =>
                            topic !== "talonvoice" && topic !== "talon",
                        )
                        .slice(0, 2)
                        .map((topic) => (
                          <button
                            key={topic}
                            className={clsx(
                              styles.topicCompact,
                              styles.tagGeneric,
                              selectedTags.includes(topic) &&
                                styles.tagGenericActive,
                              selectedTags.includes(topic) &&
                                styles.topicActiveCompact,
                            )}
                            onClick={() => toggleTag(topic)}
                            title={`Filter by ${topic}`}
                          >
                            {topic}
                          </button>
                        ))}
                      {repo.topics.filter(
                        (topic) => topic !== "talonvoice" && topic !== "talon",
                      ).length > 2 && (
                        <span className={styles.topicMoreCompact}>
                          +
                          {repo.topics.filter(
                            (topic) =>
                              topic !== "talonvoice" && topic !== "talon",
                          ).length - 2}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      {filteredAndSortedRepos.length === 0 && !loading && (
        <div className={styles.noResults}>
          <h3>No repositories found</h3>
          <p>Try adjusting your search terms or filters.</p>
        </div>
      )}
    </div>
  );
};

export default RepoExplorer;
