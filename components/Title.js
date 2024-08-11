import styled from "styled-components";

const Title = styled.h1`
  font-weight: 500;
  font-size: 1.3em;
  display: flex;
  margin: 10px 8px;
  @media (min-width: 768px) {
    margin: 0;
    font-size: 1.5em;
  }
  @media (min-width: 1024px) {
    font-size: 1.7em;
  }
`;

export default Title;
