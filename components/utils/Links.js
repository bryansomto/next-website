import {
  facebookLogo,
  instagramLogo,
  linkedInLogo,
  mailLogo,
  twitterLogo,
  whatsappLogo,
} from "../../components/assets";

export const inactiveNavLink = "capitalize hover:text-gray-200";
export const activeNavLink = `${inactiveNavLink} text-primary underline`;
export const inactiveLink =
  "flex text-sm md:text-base hover:text-gray-600 ml-2 capitalize";
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

export const QuickLinks = [
  {
    text: "Web Applications",
    path: "/design/webdesigns",
  },
  {
    text: "User Interfaces",
    path: "/design/uidesigns",
  },
  {
    text: "Brand Designs",
    path: "/design/branddesigns",
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
