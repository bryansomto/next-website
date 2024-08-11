import BlogPostCards from "@/components/BlogPostBox";
import BlogPostsGrid from "@/components/BlogPostsGrid";
import Center from "@/components/Center";
import FeaturedPost from "@/components/FeaturedPost";
import Footer from "@/components/Footer";
import { BlogNavbar, Navbar } from "@/components/Navbar";
import { mongooseConnect } from "@/lib/mongoose";
import { BlogPost } from "@/models/BlogPost";
import { Setting } from "@/models/Setting";

export default function Blog({ featuredBlogPost, newBlogPosts }) {
  return (
    <div>
      <Navbar />
      <BlogNavbar />
      <Center>
        <div>
          <FeaturedPost blogPosts={featuredBlogPost} />
        </div>
        <div>
          <BlogPostsGrid blogPosts={newBlogPosts} />
        </div>
      </Center>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const featuredBlogPostSetting = await Setting.findOne({
    name: "featuredBlogPostId",
  });
  const featuredBlogPostId = featuredBlogPostSetting.value;
  const featuredBlogPost = await BlogPost.findById(featuredBlogPostId);
  const newBlogPosts = await BlogPost.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });
  return {
    props: {
      featuredBlogPost: JSON.parse(JSON.stringify(featuredBlogPost)),
      newBlogPosts: JSON.parse(JSON.stringify(newBlogPosts)),
    },
  };
}
