import { primary } from "@/lib/colors";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: absolute;
  top: auto;
  right: 0px;
  left: 0px;
  background: url(${(props) => props.background});
  background-color: rgba(3, 131, 49, 0.9);
  background-blend-mode: multiply;
  border-bottom: 4px solid ${primary};
  opacity: 0.4;
  padding: 40px 0;
  @media (min-width: 768px) {
    padding: 70px 0;
  }
  @media (min-width: 1024px) {
    padding: 100px 0;
  }
`;

export default function Cover({ children, background }) {
  return <StyledDiv background={background}>{children}</StyledDiv>;
}
