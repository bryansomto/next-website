import { useState } from "react";
import Link from "next/link";
import Center from "./Center";
import Navbar from "./Navbar";
import ButtonLink from "./ButtonLink";

export default function Header() {
  return (
    <>
      <Navbar />
      <div className="text-3xl md:text-6xl">
        <h2>
          Hi, <span className="text-primary">I&#39;m</span>
        </h2>
        <h2 className="leading-3 md:leading-7">
          <span className="text-primary">Bryan</span>Somto
        </h2>
        <div className="md:ml-[85px] mt-2 md:mt-3 text-sm md:text-xl">
          <p>UI/UX & Web Developer</p>
          <ButtonLink href="#messageMe" primary="true" size="true">
            Send me a message
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
