import React from "react";
import Layout from "@theme/Layout";
import RepoExplorer from "../components/RepoExplorer";
import styles from "./explorer.module.css";

export default function Explorer(): JSX.Element {
  return (
    <Layout
      title="Repository Explorer"
      description="Discover Talon-related repositories from GitHub tagged with topic talonvoice."
    >
      <main
        style={{
          minHeight: "calc(100vh - 60px)",
          padding: "2rem 0",
          maxWidth: "none",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 2rem",
          }}
        >
          <div
            className="desktop-layout"
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "flex-start",
              maxWidth: "1200px",
              margin: "0 auto 1.5rem auto",
            }}
          >
            {/* Title and Description */}
            <div style={{ flex: "1", minWidth: "0" }}>
              <h1 className={styles.pageTitle}>
                Repository Explorer
              </h1>
              <p className={styles.pageDescription}>
                Discover Talon-related repositories from GitHub tagged with{" "}
                <code className={styles.codeHighlight}>
                  talonvoice
                </code>
              </p>
              <p className={styles.warning}>
                ⚠️ <strong>Use at your own risk:</strong> These repositories may not be curated or tested.
                For curated packages, visit{" "}
                <a
                  href="/integrations/talon_user_file_sets"
                >
                  talon_user_file_sets
                </a>.
              </p>
            </div>
          </div>

          <RepoExplorer />
        </div>
      </main>
    </Layout>
  );
}
