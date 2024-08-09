import Center from "@/components/Center";
import Cover from "@/components/Cover";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import WebShare from "@/components/WebShare";
import WhiteBox from "@/components/WhiteBox";
import { primary, secondary } from "@/lib/colors";
import { mongooseConnect } from "@/lib/mongoose";
import { BlogPost } from "@/models/BlogPost";
import Image from "next/image";
import styled from "styled-components";

const ColWrapper = styled.div`
  margin-top: 20px;
  position: relative;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    line-height: 1.6em;
    text-align: left;
    font-size: 0.9em;
    white-space: pre-line;
  }
  @media (min-width: 768px) {
    padding: 120px 0;
    p {
      font-size: 1.1em;
    }
  }
  @media (min-width: 1024px) {
    padding: 180px 0;
    p {
      font-size: 1.2em;
    }
  }
`;

const TextBG = styled.div`
  background-color: ${secondary};
`;

export default function BlogPage({ blogPosts }) {
  return (
    <>
      <Navbar />
      <Cover background={blogPosts.images[0]}></Cover>
      <TextBG>
        <Center>
          <Title>{blogPosts.title}</Title>
          <ColWrapper>
            <div className="flex justify-center">
              <iframe
                className="px-2 sm:px-4 lg:px-6 w-full h-52 sm:h-80 lg:w-4/5 lg:h-96"
                src={blogPosts.link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="flex flex-col gap-6 px-3 sm:px-6 my-4">
              <p>{blogPosts.description}</p>
              <WebShare title={blogPosts.title} />
            </div>
          </ColWrapper>
        </Center>
      </TextBG>
      <Footer />
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
