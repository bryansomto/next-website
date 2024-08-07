import { bg2, bg3, primary, secondary } from "@/lib/colors";
import ButtonLink from "./ButtonLink";
import styled from "styled-components";

const HeaderInfo = styled.section`
  font-family: "khand";
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  /* gap: 10px; */
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.6fr 1.2fr;
  }
`;
const InfoSection = styled.section`
  color: ${secondary};

  display: flex;
  align-items: center;
  border-right: none;
`;
const BlogSection = styled.section`
  color: ${secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`;

export default function Header() {
  return (
    <HeaderInfo className="mb-10">
      <InfoSection className="pl-6 pr-2 bg-bg1">
        <div className="text-3xl md:text-4xl lg:text-6xl">
          <h2 className="flex">
            Hi, <span className="text-primary">I&#39;m</span>
          </h2>
          <h2 className="flex leading-3 md:leading-7">
            <span className="text-primary">Bryan</span>Somto
          </h2>
          <div className="flex flex-col justify-center ml-[30px] mt-2 md:mt-0 lg:mt-3 text-xs sm:text-base md:text-lg lg:text-xl">
            <p>Technology Consulting</p>
            <ButtonLink
              href="#messageMe"
              button="true"
              outline="true"
              size="true"
              header="true"
              className="w-max"
            >
              Send me a message
            </ButtonLink>
          </div>
        </div>
      </InfoSection>
      <BlogSection
        className="bg-headerBg py-12 md:py-16 text-xs sm:text-base md:text-xl"
        priority
      >
        <p className="uppercase">See the trend in Nigeria Tech Market</p>
        <ButtonLink
          href="#messageMe"
          transparent="true"
          outline="true"
          header="true"
          size="true"
          className="w-fit"
        >
          Visit Blog
        </ButtonLink>
      </BlogSection>
    </HeaderInfo>
  );
}
