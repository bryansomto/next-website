import styled from "styled-components";
import Link from "next/link";
import FlyingButton from "./FlyingButton";
import { primary } from "@/lib/colors";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogWrapper = styled.div`
  button {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
`;
const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  /* font-size: 0.9rem; */
  margin: 0;
  color: inherit;
  text-decoration: none;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
  display: grid;
  gap: 2px;
`;

const Price = styled.div`
  color: ${primary};
  font-size: 1rem;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const WishlistButton = styled.button`
  border: 0;
  width: 40px !important;
  height: 40px;
  padding: 5px 10px;
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  cursor: pointer;
  ${(props) =>
    props.wished
      ? `
    color:red;
  `
      : `
    color:black;
  `}
  svg {
    width: 16px;
  }
`;

export default function ProductBox({ _id, title, description }) {
  const url = "/blog/" + _id;
  return (
    <BlogWrapper>
      <WhiteBox href={url}></WhiteBox>
      <ProductInfoBox>
        <Title href={url} className="text-xs sm:text-sm lg:text-base">
          {title}
        </Title>
      </ProductInfoBox>
    </BlogWrapper>
  );
}
