export const footerColumns = [
  {
    heading: "Explore",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Initiatives", href: "/initiatives" },
      { label: "Impact", href: "/impact" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    heading: "Initiatives",
    links: [
      { label: "Creative Connect", href: "/initiatives/creative-connect" },
      { label: "MICA", href: "/initiatives/mica" },
      { label: "Programs", href: "/programs" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Partner", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;

export const socialLinks = [
  { label: "Instagram", short: "IG", href: "#" },
  { label: "X (Twitter)", short: "X", href: "#" },
  { label: "LinkedIn", short: "LI", href: "#" },
  { label: "YouTube", short: "YT", href: "#" },
] as const;
