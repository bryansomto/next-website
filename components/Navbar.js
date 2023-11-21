import { useState } from "react";
import { Image, Logo } from "./assets";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import { NavbarLinks, activeNavLink, inactiveNavLink } from "./utils/Links";

const StyledHeader = styled.header`
  padding-top: 30px;
`;

const NavLogo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;

const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
  display: block;
  `
      : `
  display: none;
  `}
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 100px 30px 20px;
  background-color: #000;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    position: static;
    padding: 0;
    background-color: transparent;
    gap: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavButton = styled.button`
  background-color: transparent;
  font-size: xx-large;
  border: 0;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 3;
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
  padding: 8px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Wrapper>
        <NavLogo href={"/"}>
          <Image src={Logo} alt="logo" className="w-14 h-14 lg:w-20 lg:h-20" />
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
    </StyledHeader>
  );
}
