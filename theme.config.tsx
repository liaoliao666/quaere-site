import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "./components/logo";

const config: DocsThemeConfig = {
  logo: <Logo height={20} />,
  project: {
    link: "https://github.com/HuolalaTech/quaere",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase: "https://github.com/liaoliao666/quaere-site/blob/main",
  footer: {
    text: "Quaere Docs",
  },
  i18n: [
    // { locale: "en", text: "English" },
    { locale: "zh", text: "中文" },
  ],
  search: {
    placeholder: "Search docs",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Quaere",
    };
  },
};

export default config;
