import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import rehypeShiki, { RehypeShikiOptions } from "@shikijs/rehype";
import { BundledLanguage, bundledLanguages, ShikiTransformer } from "shiki";
// import talonLanguage from "./talon.tmLanguage.json" ;
import { transformerColorizedBrackets } from "@shikijs/colorized-brackets";
import { transformerNotationHighlight } from "@shikijs/transformers";

const config: Config = {
  title: "Talon Community Wiki",
  tagline: "Documentation for using Talon Voice",
  favicon: "img/talon-community-logo.png",

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
  onBrokenMarkdownLinks: "throw",

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
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/TalonCommunity/Wiki/edit/main/",
          beforeDefaultRehypePlugins: [
            [
              // customRehypeShiki,
              rehypeShiki,
              {
                themes: {
                  light: "catppuccin-latte",
                  dark: "catppuccin-macchiato",
                },
                inline: "tailing-curly-colon",
                transformers: [
                  // transformerColorizedBrackets() as unknown as ShikiTransformer,
                ],
                langs: Object.keys(bundledLanguages) as BundledLanguage[],
              } satisfies RehypeShikiOptions,
            ],
          ],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      // https://github.com/easyops-cn/docusaurus-search-local
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsRouteBasePath: "/",
        indexDocs: true,
        removeDefaultStemmer: true,
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "img/talon-community-logo-social.png",

    /*
    algolia is not working; we instead use local search.
    The local api key is here for reference if someone tries to get it working
    */
    // algolia: {
    //   // The application ID provided by Algolia
    //   appId: 'H33NOZZCSH',

    //   // Public API key: it is safe to commit it
    //   apiKey: 'dffe48cba92d4417efcc8f3cf8f40c49',

    //   indexName: 'talon',

    // },

    docs: {
      sidebar: {
        hideable: true,
      },
    },
    announcementBar: {
      content:
        '<b> You are viewing the new refactor of the Talon community wiki! The previous site can still be accessed via <a href="https://old.talon.wiki">https://old.talon.wiki</a></b> ✨',
      isCloseable: true,
    },

    navbar: {
      logo: {
        alt: "My Site Logo",
        src: "img/talon-community-logo.png",
      },
      hideOnScroll: true,
      items: [
        {
          type: "docSidebar",
          sidebarId: "QuickstartSidebar",
          position: "left",
          label: "Quickstart",
        },
        {
          type: "docSidebar",
          sidebarId: "BasicUsageSidebar",
          position: "left",
          label: "Basic Usage",
        },
        {
          type: "docSidebar",
          sidebarId: "CustomizationSidebar",
          position: "left",
          label: "Customization",
        },
        {
          type: "docSidebar",
          sidebarId: "IntegrationsSidebar",
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
    colorMode: {
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
