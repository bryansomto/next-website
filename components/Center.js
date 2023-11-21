import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

export default function Center({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
