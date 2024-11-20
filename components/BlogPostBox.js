import { secondary } from "@/lib/colors";
import styled from "styled-components";
import ButtonLink from "@/components/ButtonLink";

const CardWrapper = styled.div``;
const Card = styled.div`
  height: 300px;
  display: grid;
  margin-bottom: 10px;
  grid-template-rows: 1.3fr 0.7fr;
  @media screen and (min-width: 1024px) {
    height: 400px;
  }
`;
const InfoBox = styled.div`
  font-size: smaller;
  background-color: ${secondary};
  @media screen and (min-width: 768px) {
    font-size: small;
  }
  @media screen and (min-width: 1024px) {
    font-size: large;
  }
`;

const ImgBox = styled.div`
  @media screen and (min-width: 768px) {
  }
`;

export default function BlogPostBox({ _id, title, description, images }) {
  // console.log(...blogPosts);
  return (
    <CardWrapper className="px-4">
      <Card className="border border-primary" key={_id}>
        <ImgBox images={images?.[0]} />
        <ButtonLink className="p-0" href={"/blog/" + _id}>
          <InfoBox className="flex flex-col p-4 gap-3">
            <h4>{title}</h4>
            <p className="w-full h-16 text-xs whitespace-pre-line text-ellipsis overflow-hidden normal-case font-normal">
              {description}
            </p>

            <p className="text-sm font-Exo text-primary font-bold capitalize">
              See more &rarr;
            </p>
          </InfoBox>
        </ButtonLink>
      </Card>
    </CardWrapper>
  );
}
