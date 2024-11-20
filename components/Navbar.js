import { useState } from "react";
import { FaceCard, Image, HomeBG, Logo } from "./assets";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import {
  BlogNavbarLinks,
  NavbarLinks,
  activeBlogNavLink,
  activeNavLink,
  inactiveBlogNavLink,
  inactiveNavLink,
} from "./utils/Links";
import { forest, onyx, snow } from "@/lib/colors";
import SearchIcon from "./icons/SearchIcon";
import Center from "./Center";
import ButtonLink from "./ButtonLink";

const StyledNavbarWrapper = styled.header`
  background-color: #000000;
  /* border-bottom: 2px solid ${forest}; */
  position: sticky;
  z-index: 2;
`;

const NavLogo = styled(Link)`
  text-decoration: none;
  position: relative;
  z-index: 3;
`;

const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
      display: block;
      background-color: #000000;
      z-index: 2;      
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
  color: ${forest};
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: end;
    position: static;
    padding: 0;
    background-color: transparent;
    gap: 23px;
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
  color: ${forest};
  font-size: xx-large;
  border: 0;
  cursor: pointer;
  position: relative;
  z-index: 2;
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

const StyledBlogNavbarWrapper = styled.header`
  border-bottom: 2px solid ${onyx};
  background-color: ${forest};
  color: ${snow};
  position: sticky;
  z-index: 1;
  top: 0;
`;
const StyledBlogNav = styled.nav`
  display: flex;
  background-color: transparent;
  gap: 5px;
`;

const SideIcons = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
  a {
    display: inline-block;
    min-width: 20px;
    color: white;
    svg {
      margin-bottom: 4px;
      width: 16px;
      height: 16px;
      @media screen and (min-width: 768px) {
        margin-top: 10px;
      }
    }
  }
`;
const BlogNavLink = styled(Link)`
  padding: 10px 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 400px;
    height: auto;
  }
  p {
    font-size: 0.9em;
    font-weight: 300;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: left;
    img {
      width: 50vw;
      margin-left: -80px;
    }
    p {
      width: 45vw;
      text-align: left;
      margin-left: -80px;
    }
    #button {
      margin-left: -80px;
    }
  }
  @media screen and (min-width: 1024px) {
    img {
      width: 40vw;
      /* margin-left: -90px; */
    }
    p {
      width: 35vw;
      /* margin-left: -40px; */
    }
  }
  @media screen and (min-width: 1440px) {
    img {
      width: 40vw;
      margin-left: -130px;
    }
    p {
      width: 35vw;
      margin-left: -95px;
    }
    #button {
      margin-left: -95px;
    }
  }
`;

export const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <>
      <StyledNavbarWrapper className="py-2 sm:py-3">
        <Wrapper>
          <NavLogo href={"/"}>
            <Image
              src={pathname === "/" ? FaceCard : Logo}
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
          </NavLogo>
          <StyledNav mobileNavActive={mobileNavActive}>
            {NavbarLinks.map((i) => (
              <NavLink
                href={i.path}
                key={i.path}
                className={
                  pathname === i.path ? activeNavLink : inactiveNavLink
                }
              >
                {i.text}
              </NavLink>
            ))}
          </StyledNav>
          <NavButton
            className=""
            onClick={() => setMobileNavActive((prev) => !prev)}
          >
            {mobileNavActive ? (
              <MdMenuOpen className="icon" />
            ) : (
              <MdMenu className="icon" />
            )}
          </NavButton>
        </Wrapper>
      </StyledNavbarWrapper>
      {pathname === "/" ? (
        <section className="bg-onyx flex flex-col items-center pb-6 sm:pb-2">
          <Center>
            <Container className="bg-onyx text-snow">
              <Image src={HomeBG} alt="logo" className="" />
              <div className="flex flex-col gap-2">
                <p className="p-1">
                  Hello there! I&#39;m{" "}
                  <span className="text-kelly font-Cedarville">
                    Bryan Somto
                  </span>
                  , I enjoy being in the techspace, building web applications,
                  designing unique and aesthetic webpages, logos, and flyers for
                  individuals and businesses. I also create cool individual
                  potraits and Microsoft Power applications for businesses
                  looking to optimise their data and improve workflow. let&#39;s
                  get
                  <span className="text-kelly font-Cedarville"> Teching</span>.
                </p>
                <div
                  id="button"
                  className="flex justify-center sm:justify-normal"
                >
                  <ButtonLink href="/blog" welcome="true" className="w-fit">
                    Visit Blog
                  </ButtonLink>
                </div>
              </div>
            </Container>
          </Center>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export const BlogNavbar = () => {
  const router = useRouter();
  const { pathname } = router;
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledBlogNavbarWrapper>
      <Wrapper>
        <StyledBlogNav mobileNavActive={mobileNavActive}>
          {BlogNavbarLinks.map((i) => (
            <BlogNavLink
              href={i.path}
              key={i.path}
              className={
                pathname === i.path ? activeBlogNavLink : inactiveBlogNavLink
              }
            >
              {i.text}
            </BlogNavLink>
          ))}
        </StyledBlogNav>
        <SideIcons>
          <Link href={"/blog/search"}>
            <SearchIcon />
          </Link>
        </SideIcons>
      </Wrapper>
    </StyledBlogNavbarWrapper>
  );
};
