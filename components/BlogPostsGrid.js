import styled from "styled-components";
import { RevealWrapper } from "next-reveal";
import BlogPostBox from "./BlogPostBox";

const StyledBlogPostsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  padding-top: 10px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`;

export default function BlogPostsGrid({ blogPosts }) {
  return (
    <StyledBlogPostsGrid>
      {blogPosts?.length > 0 &&
        blogPosts.map((blogPosts, index) => (
          <RevealWrapper key={blogPosts._id} delay={index * 50}>
            <BlogPostBox {...blogPosts} />
          </RevealWrapper>
        ))}
    </StyledBlogPostsGrid>
  );
}
