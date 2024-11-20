import Link from "next/link";
import { useRouter } from "next/router";
import { Image, Logo } from "./assets";
import Form from "./Form";
import {
  QuickLinks,
  SocialLinks,
  activeLink,
  inactiveLink,
} from "./utils/Links";

export default function Footer() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <footer className="mt-4 sm:mt-8 lg:mt-10 px-3 sm:flex sm:flex-col sm:justify-center sm:items-center shadow-md bg-black text-white">
      <nav className="space-y-6 w-full sm:flex sm:justify-center sm:space-x-14 lg:space-x-28">
        <div className="pt-10 sm:pt-4">
          <Image src={Logo} alt="logo" className="w-14 h-14 lg:w-20 lg:h-20" />
        </div>
        <div className="space-y-4">
          <h3>Quick links</h3>
          {QuickLinks.map((i) => (
            <Link
              href={i.path}
              key={i.path}
              className={pathname.includes(i.path) ? activeLink : inactiveLink}
            >
              {i.text}
            </Link>
          ))}
        </div>
        <Form />
        <div className="flex flex-col space-y-1">
          <h3>Follow & Subscribe</h3>
          <div className="flex flex-row text-xs md:text-sm space-x-2">
            {SocialLinks.map((i) => (
              <div className={i.color + " rounded-full"} key={i.path}>
                <Link href={i.path}>
                  <Image
                    src={i.icon}
                    alt={i.text}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
      <div className="font-head flex flex-row justify-center py-4 font-thin">
        <small>bryansomto © 2024</small>
      </div>
    </footer>
  );
}
