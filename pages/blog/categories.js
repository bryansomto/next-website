import Center from "@/components/Center";
import { Category } from "@/models/Category";
import { RevealWrapper } from "next-reveal";
import Link from "next/link";
import styled from "styled-components";
import { mongooseConnect } from "@/lib/mongoose";
import { BlogNavbar, Navbar } from "@/components/Navbar";
import { BlogPost } from "@/models/BlogPost";
import Button from "@/components/Button";
import BlogPostBox from "@/components/BlogPostBox";
import Footer from "@/components/Footer";
import ButtonLink from "@/components/ButtonLink";
import Title from "@/components/Title";

const CategoryGrid = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`;
export default function Blog({ mainCategories, categoriesBlogPosts }) {
  return (
    <>
      <Navbar />
      <BlogNavbar />
      <Center>
        {mainCategories.map((cat) => (
          <CategoryWrapper key={cat._id}>
            <Title>{cat.name}</Title>
            <CategoryGrid>
              {categoriesBlogPosts[cat._id].map((p, index) => (
                <RevealWrapper key={index} delay={index * 50}>
                  <BlogPostBox {...p} />
                </RevealWrapper>
              ))}
              <RevealWrapper
                className="pl-2 sm:pl-0"
                delay={categoriesBlogPosts[cat._id].length * 50}
              >
                <ButtonLink
                  outline={true}
                  transparent={true}
                  small={true}
                  href={"/blog/category/" + cat._id}
                >
                  Show all &rarr;
                </ButtonLink>
              </RevealWrapper>
            </CategoryGrid>
          </CategoryWrapper>
        ))}
      </Center>
      <Footer />
    </>
  );
}

export async function getServerSideProps(ctx) {
  await mongooseConnect();
  const categories = await Category.find();
  const mainCategories = categories.filter((c) => !c.parent);
  const categoriesBlogPosts = {}; //catId => [blogPosts]
  const allFetchedBlogPostsId = [];
  for (const mainCat of mainCategories) {
    const mainCatId = mainCat._id.toString();
    const childCatIds = categories
      .filter((c) => c?.parent?.toString() === mainCatId)
      .map((c) => c._id.toString());
    const categoriesIds = [mainCatId, ...childCatIds];
    const blogPosts = await BlogPost.find({ category: categoriesIds }, null, {
      limit: 4,
      sort: { _id: -1 },
    });
    allFetchedBlogPostsId.push(...blogPosts.map((p) => p._id.toString()));
    categoriesBlogPosts[mainCat._id] = blogPosts;
  }
  return {
    props: {
      mainCategories: JSON.parse(JSON.stringify(mainCategories)),
      categoriesBlogPosts: JSON.parse(JSON.stringify(categoriesBlogPosts)),
    },
  };
}
