import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
  /* padding: 0 20px; */
  @media (min-width: 768px) {
    max-width: 80%;
    padding: 0 30px;
  }
  @media (min-width: 1024px) {
    max-width: 60%;
    padding: 0 60px;
  }
`;

export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
