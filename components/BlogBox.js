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

const BlogInfoBox = styled.div`
  margin-top: 5px;
  display: grid;
  gap: 2px;
`;

export default function ProductBox({ _id, title, description }) {
  const url = "/blog/" + _id;
  return (
    <BlogWrapper>
      <WhiteBox href={url}></WhiteBox>
      <BlogInfoBox>
        <Title href={url} className="text-xs sm:text-sm lg:text-base">
          {title}
        </Title>
      </BlogInfoBox>
    </BlogWrapper>
  );
}
