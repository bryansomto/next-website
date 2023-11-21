import { useState } from "react";
import styled from "styled-components";
import Box from "./Box";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ImageWrapper = styled.div`
  padding: 10px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BigImage = styled.img`
  max-height: 180px;
  border-radius: 10px;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 5px;
  flex-grow: 0;
  margin-top: 3px;
`;
const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${(props) =>
    props.active
      ? `
    border-color: #000;
    `
      : `
    border-color: transparent;
    opacity:0.9;
    `}

  height: 40px;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;
`;

export default function DesignImages({ images, color }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <Box color={color} type="designDetails">
      <ImageWrapper>
        <BigImage src={activeImage} />
      </ImageWrapper>

      <ImageButtons>
        {images.map((image) => (
          <ImageButton
            key={image}
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
          >
            <Image src={image} alt="" />
          </ImageButton>
        ))}
      </ImageButtons>
    </Box>
  );
}
