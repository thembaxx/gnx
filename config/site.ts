export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "GNX",
  description: "Black Grand National!",
  version: "0.0.0.40",
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
    twitter: "https://twitter.com/thembaxx",
    discord: "https://discord.gg/thembax",
  },
  profile: {
    name: "Themba Mndebele",
    email: "work@themba.dev",
    website: "https://themba.dev",
  },
};
