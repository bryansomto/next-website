import styled from "styled-components";
import Box from "./Box";
import ButtonLink from "./ButtonLink";
import DesignImages from "./DesignImages";

const DesignWrapper = styled.div`
  display: grid;
  gap: 40px;
  @media (min-width: 768px) {
    gap: 100px;
  }
`;
const DesignContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  @media (min-width: 768px) {
    grid-template-columns: 0.7fr 1.3fr;
    gap: 20px;
  }
`;
const DesignInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    font-size: large;
    text-transform: capitalize;
    @media (min-width: 768px) {
      font-size: x-large;
    }
  }
  p {
    font-family: "Khand", sans-serif;
    font-weight: 300;
  }
`;

export default function DesignDetail(...props) {
  const DesignProps = Object.values(props[0]);
  const BoxColor = Object.values(props[0].color).join("").split(",").toString();
  return (
    <DesignWrapper>
      {DesignProps[0]?.length > 0 &&
        DesignProps[0].map((DesignProp) => (
          <DesignContainer key={DesignProp._id}>
            <DesignImages images={DesignProp.images} color={BoxColor} />
            <DesignInfo>
              <h2 className="flex">{DesignProp.title}</h2>
              <p className="flex">{DesignProp.description}</p>
              <div className="flex">
                <ButtonLink
                  href={DesignProp.link || DesignProp.title}
                  outline="true"
                  white="true"
                  link="true"
                >
                  View Design
                </ButtonLink>
              </div>
            </DesignInfo>
          </DesignContainer>
        ))}
    </DesignWrapper>
  );
}
