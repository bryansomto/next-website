import styled from "styled-components";
import DesignBox from "./DesignBox";
import ButtonLink from "./ButtonLink";

const DesignWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-size: 16px;
    gap: 10px;
  }
`;

export default function DesignGrid({ webDesigns, uiDesigns, brandDesigns }) {
  return (
    <>
      <section>
        <h1>Web Applications</h1>
        <DesignWrapper>
          {webDesigns?.length > 0 &&
            webDesigns.map((webDesign) => (
              <DesignBox key={webDesign._id} {...webDesign} color="secondary" />
            ))}
        </DesignWrapper>
        <div className="flex justify-end">
          <ButtonLink
            href={"/design/webdesigns"}
            outline="true"
            white="true"
            link="true"
          >
            Read more
          </ButtonLink>
        </div>
      </section>
      <section>
        <h1>User Interfaces</h1>
        <DesignWrapper>
          {uiDesigns?.length > 0 &&
            uiDesigns.map((uiDesign) => (
              <DesignBox key={uiDesign._id} {...uiDesign} color="secondary" />
            ))}
        </DesignWrapper>
        <div className="flex justify-end">
          <ButtonLink
            href={"/design/uidesigns"}
            outline="true"
            white="true"
            link="true"
          >
            Read more
          </ButtonLink>
        </div>
      </section>
      <section>
        {" "}
        <h1>Brand Designs/Ads</h1>
        <DesignWrapper>
          {brandDesigns?.length > 0 &&
            brandDesigns.map((brandDesign) => (
              <DesignBox
                key={brandDesign._id}
                {...brandDesign}
                color="secondary"
              />
            ))}
        </DesignWrapper>
        <div className="flex justify-end">
          <ButtonLink
            href={"/design/branddesigns"}
            outline="true"
            white="true"
            link="true"
          >
            Read more
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
