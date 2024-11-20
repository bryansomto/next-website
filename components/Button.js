import { forest, jet, kelly, onyx, snow } from "@/lib/colors";
import styled, { css } from "styled-components";

export const ButtonStyle = css`
  border: 0;
  border-radius: 10px;
  margin-top: 2px;
  padding: 4px 10px;
  @media (min-width: 768px) {
    padding: 5px 15px;
  }
  text-transform: uppercase;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 300;
  svg {
    height: 16px;
    margin-right: 5px;
  }
  ${(props) =>
    props.welcome &&
    css`
      padding: 10px 20px;
      background-color: ${forest};
      color: ${snow};
      border: 1px solid transparent;
      border-radius: 0;
      font-size: 0.9rem;
      &:hover {
        border: 1px solid ${snow};
        background-color: transparent;
        transition: 0.3s;
      }
      @media (min-width: 768px) {
        padding: 10px 30px;
      }
    `}
  ${(props) =>
    props.black &&
    css`
      padding: 9px 18px;
      background-color: ${onyx};
      color: ${snow};
      border: 1px solid transparent;
      border-radius: 0;
      font-size: 0.8rem;
      &:hover {
        border: 1px solid ${onyx};
        background-color: transparent;
        color: ${onyx};
        transition: 0.3s;
      }
      @media (min-width: 768px) {
        padding: 10px 30px;
      }
    `}
  ${(props) =>
    props.transparent &&
    props.outline &&
    css`
      background-color: transparent;
      color: ${forest};
      border: 2px solid ${forest};
      &:hover {
        background-color: ${forest};
        color: ${snow};
        outline: 2px solid ${forest};
        outline-offset: 2px;
      }
    `}
  ${(props) =>
    props.button &&
    props.outline &&
    css`
      background-color: ${forest};
      border: 1px solid transparent;
      color: ${snow};
      &:hover {
        background-color: transparent;
        color: ${snow};
        border: 1px solid ${snow};
        transition: 0.3s;
      }
    `}
    ${(props) =>
    props.small &&
    css`
      font-size: x-small;
      font-weight: 400;
      @media (min-width: 768px) {
        font-size: small;
        outline: 0px solid ${forest};
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
        outline: 0px solid ${forest};
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
