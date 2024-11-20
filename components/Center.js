import styled from "styled-components";

const StyledDiv = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: auto;
  max-width: 95%;
  justify-items: center;
  align-items: center;
  @media (min-width: 768px) {
    max-width: 85%;
    gap: 80px;
  }
  @media (min-width: 1024px) {
    max-width: 75%;
  }
`;

export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
