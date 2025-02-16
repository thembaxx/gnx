export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NEXTDOT",
  description: "The best chapter",
  version: "0.0.0.1",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Snapshot",
      href: "/snapshot",
    },
    {
      label: "Settings",
      href: "/settings",
    },
  ],
  links: {
    github: "https://github.com/thembaxx",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
