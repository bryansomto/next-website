import { useState } from "react";
import { FaceCard, Image, Logo } from "./assets";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { NavbarLinks, activeNavLink, inactiveNavLink } from "./utils/Links";
import { bg1, bg4, primary, secondary } from "@/lib/colors";

const StyledNavbarWrapper = styled.header`
  background-color: #000000;
  border-bottom: 2px solid ${primary};
`;

const NavLogo = styled(Link)`
  /* color: #fff; */
  text-decoration: none;
  position: relative;
  z-index: 1;
`;

const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
  display: block;
  background-color: #FFFFFF;
  `
      : `
  display: none;
  `}
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 80px 30px 20px;
  color: ${primary};
  font-size: large;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: end;
    position: static;
    padding: 0;
    background-color: transparent;
    gap: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  @media (min-width: 768px) {
    max-width: 80%;
  }
  @media (min-width: 1024px) {
    max-width: 60%;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  color: ${primary};
  font-size: xx-large;
  border: 0;
  cursor: pointer;
  position: relative;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: inherit;
  align-items: end;
  text-decoration: none;
  padding: 4px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledNavbarWrapper className="py-3 sm:py-4">
      <Wrapper>
        <NavLogo href={"/"}>
          <Image
            src={pathname === "/" ? FaceCard : Logo}
            alt="logo"
            className="w-14 h-14 lg:w-20 lg:h-20 rounded-full"
          />
        </NavLogo>
        <StyledNav mobileNavActive={mobileNavActive}>
          {NavbarLinks.map((i) => (
            <NavLink
              href={i.path}
              key={i.path}
              className={pathname === i.path ? activeNavLink : inactiveNavLink}
            >
              {i.text}
            </NavLink>
          ))}
        </StyledNav>
        <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
          {mobileNavActive ? (
            <MdMenuOpen className="icon" />
          ) : (
            <MdMenu className="icon" />
          )}
        </NavButton>
      </Wrapper>
    </StyledNavbarWrapper>
  );
}
