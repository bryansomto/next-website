import { HomeBG, Logo } from "@/components/assets";
import ButtonLink from "@/components/ButtonLink";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  justify-items: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: 50px;
    grid-template-columns: 1fr 1fr;
  }
`;

export default function Welcome() {
  return (
    <Container className="shadow-md pb-12">
      <Image src={HomeBG} alt="logo" className="" />
      <div className="flex flex-col gap-6 sm:gap-12 sm:-ml-32 lg:-ml-96 w-11/12 sm:w-4/5">
        <p className="text-3xl sm:text-4xl lg:text-5xl text-center sm:text-left">
          Hello there! I&#39;m <span className="text-primary">Bryan Somto</span>
          , let&#39;s get
          <span className="text-primary"> Teching</span>.
        </p>
        <div className="">
          <ButtonLink
            href="/blog"
            transparent="true"
            outline="true"
            welcome="true"
            size="true"
            className="w-fit"
          >
            Visit Blog
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}
