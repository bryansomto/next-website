import {
  bg2,
  bg4,
  primary,
  secondary,
  button,
  bgMain,
  bg1,
} from "@/lib/colors";
import styled, { css } from "styled-components";

export const ButtonStyle = css`
  border: 0;
  margin-top: 2px;
  padding: 4px 8px;
  @media (min-width: 768px) {
    padding: 5px 15px;
  }
  text-transform: uppercase;
  border-radius: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  svg {
    height: 16px;
    margin-right: 5px;
  }
  ${(props) =>
    props.transparent &&
    props.outline &&
    css`
      background-color: transparent;
      color: ${primary};
      border: 2px solid ${primary};
      &:hover {
        background-color: ${primary};
        color: ${secondary};
        outline: 2px solid ${primary};
        outline-offset: 2px;
      }
    `}
  ${(props) =>
    props.button &&
    props.outline &&
    css`
      background-color: ${button};
      border: 1px solid ${button};
      color: ${secondary};
      &:hover {
        background-color: transparent;
        color: ${button};
        outline: 2px solid ${button};
        outline-offset: 1px;
      }
    `}
    ${(props) =>
    props.welcome &&
    css`
      font-size: 0.8rem;
      border: 1px solid ${primary};
      &:hover {
        outline: 2px solid ${primary};
        outline-offset: 2px;
      }
      @media (min-width: 768px) {
        font-size: 1.2rem;
        padding: 10px 20px;
        border: 3px solid ${primary};
        &:hover {
          outline: 3px solid ${primary};
          outline-offset: 2px;
        }
      }
      @media (min-width: 1024px) {
        font-size: 1.3rem;
        padding: 10px 60px;
      }
    `}
    ${(props) =>
    props.small &&
    css`
      font-size: xx-small;
      font-weight: 400;
      @media (min-width: 768px) {
        outline: 0px solid ${primary};
        font-size: small;
      }
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
