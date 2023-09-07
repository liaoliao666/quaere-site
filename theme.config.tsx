import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "./components/logo";

const config: DocsThemeConfig = {
  logo: <Logo height={20} />,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
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
};

export default config;
