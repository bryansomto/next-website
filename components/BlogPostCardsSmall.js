import { secondary } from "@/lib/colors";
import styled from "styled-components";
import ButtonLink from "@/components/ButtonLink";

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const Card = styled.div`
  height: 200px;
  display: grid;
  grid-template-rows: 1.3fr 0.7fr;
  @media screen and (min-width: 768px) {
    height: 250px;
  }
  @media screen and (min-width: 1024px) {
    height: 300px;
  }
`;
const InfoBox = styled.div`
  font-size: small;
  background-color: ${secondary};
  @media screen and (min-width: 768px) {
    font-size: medium;
  }
`;

const ImgBox = styled.div`
  @media screen and (min-width: 768px) {
  }
`;

export default function BlogPostCardsSmall(...props) {
  const BlogPostProps = Object.values(props[0]);
  return (
    <CardWrapper>
      {BlogPostProps[0]?.length > 0 &&
        BlogPostProps[0].map((BlogPostProp) => (
          <Card className="border border-primary" key={BlogPostProp._id}>
            <ImgBox images={BlogPostProp.images} />
            <InfoBox className="py-2 px-3 sm:py-4 sm:px-6 md:px-12">
              <h2 className="flex">{BlogPostProp.title}</h2>
              <p className="flex">{BlogPostProp.description}</p>
              <div className="flex">
                <ButtonLink
                  href={"/blog/" + BlogPostProp._id}
                  outline="true"
                  white="true"
                  link="true"
                >
                  View Blog Post
                </ButtonLink>
              </div>
            </InfoBox>
          </Card>
        ))}
    </CardWrapper>
  );
}
