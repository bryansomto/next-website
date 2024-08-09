import styled from "styled-components";

const Title = styled.h1`
  font-family: "Exo";
  font-weight: 700;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  top: 25px;
  @media (min-width: 768px) {
    top: 50px;
    font-size: 2em;
  }
  @media (min-width: 1024px) {
    top: 80px;
    font-size: 2.8em;
  }
`;

export default Title;
