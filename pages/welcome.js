import { HomeBG, Logo } from "@/components/assets";
import ButtonLink from "@/components/ButtonLink";
import Center from "@/components/Center";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 400px;
    height: auto;
  }
  p {
    font-size: 1.6em;
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: left;
    img {
      width: 50vw;
      margin-left: -65px;
    }
    p {
      width: 45vw;
      font-size: 1.65em;
      text-align: left;
      margin-left: -40px;
    }
  }
  @media screen and (min-width: 1024px) {
    img {
      width: 40vw;
      margin-left: -90px;
    }
    p {
      width: 35vw;
      font-size: 1.7em;
      margin-left: -40px;
    }
  }
  @media screen and (min-width: 1440px) {
    img {
      width: 40vw;
      margin-left: -130px;
    }
    p {
      width: 35vw;
      font-size: 1.8em;
      margin-left: -45px;
    }
  }
`;

export default function Welcome() {
  return (
    <Center>
      <Container className="pb-12">
        <Image src={HomeBG} alt="logo" className="" />
        <div className="flex flex-col gap-2">
          <p className="">
            Hello there! I&#39;m{" "}
            <span className="text-primary">Bryan Somto</span>, let&#39;s get
            <span className="text-primary"> Teching</span>.
          </p>
          <div className="md:-ml-10 lg:-ml-30 flex justify-center sm:justify-normal">
            <ButtonLink
              href="/blog"
              transparent="true"
              outline="true"
              welcome="true"
              // size="true"
              className="w-fit"
            >
              Visit Blog
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Center>
  );
}
