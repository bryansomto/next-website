import { secondary } from "@/lib/colors";
import styled from "styled-components";
import ButtonLink from "@/components/ButtonLink";
import { RevealWrapper } from "next-reveal";

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 30px 0;
`;
const Card = styled.div`
  height: 300px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  @media screen and (min-width: 1024px) {
    height: 400px;
  }
`;
const InfoBox = styled.div`
  font-size: small;
  background-color: ${secondary};
  @media screen and (min-width: 768px) {
    font-size: large;
  }
  @media screen and (min-width: 1024px) {
    font-size: x-large;
  }
`;

const ImgBox = styled.div`
  @media screen and (min-width: 768px) {
  }
`;

export default function FeaturedPost({ blogPosts }) {
  return (
    <CardWrapper className="px-4">
      <RevealWrapper key={blogPosts._id} delay={1 * 50}>
        <Card className="border border-primary" key={blogPosts._id}>
          <ImgBox images={blogPosts.images?.[0]} />
          <ButtonLink className="p-0" href={"/blog/" + blogPosts._id}>
            <InfoBox className="h-full flex flex-col p-4 gap-3">
              <h4 className="flex font-Exo text-lg/7 md:text-xl/7 font-bold uppercase text-gray-700">
                {blogPosts.title}
              </h4>
              <p className="w-full h-40 text-xs whitespace-pre-line text-ellipsis overflow-hidden normal-case font-normal">
                {blogPosts.description}
              </p>

              <p className="text-sm font-Exo text-primary font-bold capitalize">
                See more &rarr;
              </p>
            </InfoBox>
          </ButtonLink>
        </Card>
      </RevealWrapper>
    </CardWrapper>
  );
}
