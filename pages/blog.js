import BlogPostCards from "@/components/BlogPostCards";
import BlogPostCardsSmall from "@/components/BlogPostCardsSmall";
import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { mongooseConnect } from "@/lib/mongoose";
import { BlogPost } from "@/models/BlogPost";

export default function Blog({ blogPosts }) {
  return (
    <div>
      <Navbar />
      <Center>
        <div>
          <BlogPostCards blogPosts={blogPosts} />
        </div>
        <div>
          <BlogPostCardsSmall blogPosts={blogPosts} />
        </div>
      </Center>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const blogPosts = await BlogPost.find(
    {
      category: "66aa793e2dcb6df64a24e74e",
    },
    null,
    { sort: { _id: -1 }, limit: 4 }
  );
  return {
    props: {
      blogPosts: JSON.parse(JSON.stringify(blogPosts)),
    },
  };
}
