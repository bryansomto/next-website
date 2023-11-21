import {
  primary,
  secondary,
  tertiary,
  secondaryVariant,
  surfaceBright,
  surfaceHighest,
} from "@/lib/colors";
import styled, { css } from "styled-components";

export const BoxStyle = css`
  height: 160px;
  border-radius: 5px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: auto;
    margin: 0;
  }
  ${(props) =>
    props.primary ||
    (props.color === "primary" &&
      css`
        background-color: ${primary};
      `)}
  ${(props) =>
    props.secondary ||
    (props.color === "secondary" &&
      css`
        background-color: ${secondary};
      `)}
  ${(props) =>
    props.tertiary ||
    (props.color === "tertiary" &&
      css`
        background-color: ${tertiary};
      `)}
  ${(props) =>
    props.secondaryVariant ||
    (props.color === "secondaryVariant" &&
      css`
        background-color: ${secondaryVariant};
      `)}
  ${(props) =>
    props.surfaceBright ||
    (props.color === "surfaceBright" &&
      css`
        background-color: ${surfaceBright};
      `)}
  ${(props) =>
    props.type === "designDetails" &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 260px;
    `}
`;
const StyledBox = styled.div`
  ${BoxStyle}
`;

export default function Box({ children, ...rest }) {
  return <StyledBox {...rest}>{children}</StyledBox>;
}
