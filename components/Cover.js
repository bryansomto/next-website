import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-items: center;
  text-align: center;
  background-color: rgba(3, 131, 49, 0.3);
  background-blend-mode: multiply;
  padding: 30px 0;
  @media (min-width: 768px) {
    padding: 70px 0;
  }
  @media (min-width: 1024px) {
    padding: 100px 0;
  }
`;

export default function Cover({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
