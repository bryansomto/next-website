import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 16px auto;
  @media (min-width: 768px) {
    margin: 32px auto;
    max-width: 80%;
  }
  @media (min-width: 1024px) {
    margin: 40px auto;
    max-width: 60%;
  }
`;

export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
