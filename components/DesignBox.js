import Link from "next/link";
import styled from "styled-components";
import Box from "./Box";

const ColorBox = styled(Link)`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 140px;
    border-radius: 10px;
  }
`;

export default function DesignBox({ _id, title, description, images, color }) {
  const url = "/design/" + _id;
  return (
    <Box color={color}>
      <ColorBox href={url}>
        <img src={images?.[0]} alt="" />
      </ColorBox>
    </Box>
  );
}
