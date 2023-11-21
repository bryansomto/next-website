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
    <footer>
      <nav className="space-y-6 w-fit">
        <div className="pt-10">
          <Image src={Logo} alt="logo" className="w-14 h-14 lg:w-20 lg:h-20" />
        </div>
        <div className="space-y-1">
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
        <div className="">
          <Form />
        </div>
        <div className="flex flex-col space-y-1">
          <h3>Connect with me</h3>
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
        <small>bryansomto © 2023</small>
      </div>
    </footer>
  );
}
