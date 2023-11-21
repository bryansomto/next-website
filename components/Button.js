import { primary, secondary, tertiary, secondaryVariant } from "@/lib/colors";
import styled, { css } from "styled-components";

export const ButtonStyle = css`
  border: 0;
  padding: 4px 8px;
  @media (min-width: 768px) {
    padding: 5px 15px;
  }
  border-radius: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  svg {
    height: 16px;
    margin-right: 5px;
  }

  ${(props) =>
    props.white &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
      &:hover {
        background-color: #fff;
        color: #000;
        outline: 3px solid #fff;
        outline-offset: 2px;
      }
    `}
  ${(props) =>
    props.white &&
    props.link &&
    css`
      margin-top: 5px;
      padding: 0 20px;
      font-size: small;
      @media (min-width: 768px) {
        font-size: medium;
        padding: 0 20px;
      }
    `}
  ${(props) =>
    props.primary &&
    css`
      background-color: ${primary};
      border: 1px solid ${primary};
      color: #000;
      &:hover {
        background-color: transparent;
        color: #fff;
        outline: 3px solid ${primary};
        outline-offset: 2px;
      }
    `}
  ${(props) =>
    props.secondary &&
    css`
      background-color: ${secondary};
      border: 1px solid ${secondary};
      color: #000;
      &:hover {
        background-color: transparent;
        color: #fff;
        outline: 3px solid ${secondary};
        outline-offset: 2px;
      }
    `}
    ${(props) =>
    props.size &&
    css`
      @media (min-width: 768px) {
        font-size: 1.2rem;
        padding: 10px 15px;
      }
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
