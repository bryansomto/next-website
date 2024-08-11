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
  grid-template-columns: 1.3fr 0.7fr;
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
    <CardWrapper>
      <RevealWrapper key={blogPosts._id} delay={1 * 50}>
        <Card className="border border-primary" key={blogPosts._id}>
          <ImgBox images={blogPosts.images?.[0]} />
          <InfoBox className="py-2 sm:py-4">
            <p className="flex">
              <ButtonLink href={"/blog/" + blogPosts._id} link="true">
                {blogPosts.title}
              </ButtonLink>
            </p>
          </InfoBox>
        </Card>
      </RevealWrapper>
    </CardWrapper>
  );
}
