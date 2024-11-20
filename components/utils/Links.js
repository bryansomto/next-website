import {
  facebookLogo,
  instagramLogo,
  linkedInLogo,
  mailLogo,
  twitterLogo,
  whatsappLogo,
} from "../../components/assets";

export const inactiveNavLink =
  "capitalize text-sm font-Exo hover:text-gray-200";
export const activeNavLink = `${inactiveNavLink} text-primary underline`;
export const inactiveBlogNavLink =
  "capitalize text-xs font-Exo hover:text-gray-200";
export const activeBlogNavLink = `${inactiveBlogNavLink} underline`;
export const inactiveLink = "flex text-xs hover:text-gray-600 ml-2 capitalize";
export const activeLink = `${inactiveLink} bg-highlight text-gray-400`;

export const NavbarLinks = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "contact me",
    path: "/contacts",
  },
  {
    text: "about",
    path: "/about",
  },
];
export const BlogNavbarLinks = [
  {
    text: "all posts",
    path: "/blog",
  },
  {
    text: "categories",
    path: "/blog/categories",
  },
];

export const QuickLinks = [
  {
    text: "Web Pages & Applications",
    path: "/more/673db1101ce275f20c420fd7",
  },
  {
    text: "Logos",
    path: "/more/673db1191ce275f20c420fd8",
  },
  {
    text: "Flyers & Others",
    path: "/more/673db1221ce275f20c420fd9",
  },
  {
    text: "Portraits",
    path: "/more/673db1cd1ce275f20c420fda",
  },
];

export const SocialLinks = [
  // {
  //   icon: facebookLogo,
  //   path: "facebook.com/bryansomto",
  //   text: "connect with me on facebook",
  // },
  {
    icon: whatsappLogo,
    path: "https://wa.me/2348168038695",
    text: "connect with me on whatsapp",
    color: "bg-bg2",
  },
  // {
  //   icon: mailLogo,
  //   path: "mailto:bryansomto@gmail.com",
  //   text: "send me an email",
  // },
  {
    icon: twitterLogo,
    path: "twitter.com/bryansomto",
    text: "connect with me on twitter",
    color: "bg-bg2",
  },
  {
    icon: linkedInLogo,
    path: "https://www.linkedin.com/in/bryansomto",
    text: "connect with me on linkedIn",
    color: "bg-bg2",
  },
];
