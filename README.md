# Talon Wiki

This is the source repo for the [https://talon.wiki/](https://talon.wiki), a community maintained wiki for [Talon voice](https://talonvoice.com/).

Join the [Talon Slack](https://talonvoice.com/chat) to find other folks interested in or using Talon. If you want to support the project, consider donating to the [Patreon](https://www.patreon.com/lunixbochs).

## Who can Contribute

This wiki belongs to the Talon Community, and contributions are welcome from anyone.

## Development Setup for Contributors

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm (comes with Node.js)
- A GitHub account

### Getting Started

1. **Fork the repository** on GitHub by clicking the "Fork" button at the top of the [TalonCommunity/Wiki](https://github.com/TalonCommunity/Wiki) repository page.

2. **Clone your fork** (replace `YOUR_USERNAME` with your GitHub username):

   ```bash
   git clone https://github.com/YOUR_USERNAME/Wiki.git
   cd Wiki
   ```

3. **Add the upstream remote** to keep your fork in sync:

   ```bash
   git remote add upstream https://github.com/TalonCommunity/Wiki.git
   ```

4. **Install dependencies**:

   ```bash
   npm install
   ```

5. **Start the development server**:
   ```bash
   npm start
   ```

The site will open at `http://localhost:3000` and automatically reload when you make changes.

### Contributing Workflow

1. **Create a new branch** for your changes:

   ```bash
   git checkout -b your-feature-branch
   ```

2. **Make your changes** and test them locally

3. **Commit your changes**:

   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

4. **Push to your fork**:

   ```bash
   git push origin your-feature-branch
   ```

5. **Create a Pull Request** from your fork to the main repository

### Keeping Your Fork Updated

Before starting new work, sync your fork with the upstream repository:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

### Checklist for Contributors

- [ ] Fork the repository and create a feature branch
- [ ] Use relative markdown links
- [ ] Run `npm run build` and ensure the build is successful (no broken links)
- [ ] Test your changes locally before submitting a pull request
- [ ] Create a pull request with a clear description of your changes

## Available Commands

| Command                | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `npm start`            | Start the development server with hot reloading |
| `npm run build`        | Build the static site for production            |
| `npm run serve`        | Serve the production build locally              |
| `npm run update-repos` | Fetch fresh repository data from GitHub API     |
| `npm run clear`        | Clear Docusaurus cache                          |
| `npm run typecheck`    | Run TypeScript type checking                    |

## Repository Explorer

The wiki includes a [Repository Explorer](https://talon.wiki/explorer/) that automatically displays Talon-related repositories from GitHub tagged with `talonvoice` topic.

The repository data is cached locally to avoid hitting GitHub's API rate limits (60 requests per hour for unauthenticated users, 5,000 for authenticated users). To update the cached data, you can run:

```bash
npm run update-repos
# or
npm run build --fetch-repos
```

Otherwise, the explorer will use the cached data until the next production build or scheduled update.

### Omitting Repositories from the Explorer

To exclude specific repositories from the explorer:

1. Edit `plugins/repo-data-omit-list.json`
2. Add repository full names to the `omitRepos` array:
   ```json
   {
     "omitRepos": ["owner/repo-name", "another-owner/another-repo"]
   }
   ```
3. Changes take effect on the next build

## Technology Stack

- [Docusaurus](https://docusaurus.io/) - Static site generator
- [React](https://reactjs.org/) - Component framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Shiki](https://shiki.style/) - Syntax highlighting
