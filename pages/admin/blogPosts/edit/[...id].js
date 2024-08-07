import Layout from "@/components/admin/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BlogPostForm from "@/components/admin/BlogPostForm";

export default function EditBlogPostPage() {
  const [blogPostInfo, setBlogPostInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/blogPosts?id=${id}`).then((response) => {
      setBlogPostInfo(response.data);
    });
  }, [id]);

  return (
    <Layout>
      <h1>Edit Design</h1>
      {blogPostInfo && <BlogPostForm {...blogPostInfo} />}
    </Layout>
  );
}
