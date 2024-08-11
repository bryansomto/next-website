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
  font-weight: 500;
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
        font-size: 0.9rem;
        padding: 5px 10px;
        border: 3px solid ${primary};
        &:hover {
          outline: 3px solid ${primary};
          outline-offset: 2px;
        }
      }
      @media (min-width: 1024px) {
        font-size: 1.1rem;
      }
    `}
    ${(props) =>
    props.small &&
    css`
      font-size: x-small;
      font-weight: 400;
      @media (min-width: 768px) {
        font-size: small;
        outline: 0px solid ${primary};
      }
    `}
    ${(props) =>
    props.share &&
    css`
      float: right;
      font-size: small;
      border-radius: 50px;
      @media (min-width: 1024px) {
        font-size: medium;
        outline: 0px solid ${primary};
      }
    `}
    ${(props) =>
    props.link &&
    css`
      display: flex;
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
