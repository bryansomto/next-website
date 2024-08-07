import Layout from "@/components/admin/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteDesignPage() {
  const router = useRouter();
  const [blogPostInfo, setBlogPostInfo] = useState();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/blogPosts?id=${id}`).then((response) => {
      setBlogPostInfo(response.data);
    });
  }, [id]);

  function goBack() {
    router.push("/admin/blogPosts");
  }

  async function deleteBlogPost() {
    await axios.delete(`/api/blogPosts?id=${id}`);
    goBack();
  }

  return (
    <Layout>
      <h1 className="text-center">
        Do you really want to delete &#34;{blogPostInfo?.title}&#34;?
      </h1>
      <div className="flex gap-2 justify-center">
        <button className="btn-red" onClick={deleteBlogPost}>
          Yes
        </button>
        <button className="btn-default" onClick={goBack}>
          No
        </button>
      </div>
    </Layout>
  );
}
