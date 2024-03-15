import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Talon Community Wiki 🎤",
  tagline: "Documentation for using Talon Voice",
  favicon: "img/talon_logo.png",

  // Set the production url of your site here
  url: "https://talon.wiki",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Talon Community", // Usually your GitHub org/user name.
  projectName: "Talon Community Wiki", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root

          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "img/talon.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "IntroSidebar",
          position: "left",
          label: "Talon-Intro",
        },
        {
          type: "docSidebar",
          sidebarId: "ScriptingSidebar",
          position: "left",
          label: "Talon-Scripting",
        },
        {
          type: "docSidebar",
          sidebarId: "IntegrationSidebar",
          position: "left",
          label: "Integrations",
        },
        {
          href: "https://github.com/TalonCommunity/Wiki/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Docs",
        //       to: "/docs/",
        //     },
        //   ],
        // },
        {
          title: "Talon Links",
          items: [
            {
              label: "Official Website",
              href: "https://talonvoice.com/",
            },
            {
              label: "Slack",
              href: "https://talonvoice.com/chat",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/TalonCommunity/Wiki/",
            },
            {
              label: "Donations/Beta Access",
              href: "https://www.patreon.com/join/lunixbochs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Talon Community`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
