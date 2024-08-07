import Center from "@/components/Center";
import Cover from "@/components/Cover";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import { primary } from "@/lib/colors";
import { mongooseConnect } from "@/lib/mongoose";
import { BlogPost } from "@/models/BlogPost";
import Image from "next/image";
import styled from "styled-components";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
    gap: 40px;
  }
  margin-top: 40px;
`;

const PriceRow = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  color: ${primary};
  font-size: 1.7rem;
  font-weight: 600;
`;

export default function BlogPage({ blogPosts }) {
  return (
    <>
      <Navbar />
      <Cover>
        <Title>{blogPosts.title}</Title>
        <p className="w-4/5 sm:w-3/5 lg:w-2/5">{blogPosts.description}</p>
      </Cover>
      <Center>
        <ColWrapper>
          <WhiteBox>
            <Image images={blogPosts.images} />
          </WhiteBox>
          <div className="space-y-4"></div>
        </ColWrapper>
        {/* <Blog blogPosts={blogPosts} /> */}
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const blogPosts = await BlogPost.findById(id);
  return {
    props: {
      blogPosts: JSON.parse(JSON.stringify(blogPosts)),
    },
  };
}
