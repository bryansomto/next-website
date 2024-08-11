import Layout from "@/components/admin/Layout";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { useEffect, useState } from "react";
import { withSwal } from "react-sweetalert2";

function SettingsPage({ swal }) {
  const [blogPosts, setBlogPosts] = useState([]);
  const [featuredBlogPostId, setFeaturedBlogPostId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchAll().then(() => {
      setIsLoading(false);
    });
  }, []);

  async function fetchAll() {
    await axios.get("/api/blogPosts").then((res) => {
      setBlogPosts(res.data);
      setIsLoading(false);
    });
    await axios.get("/api/settings?name=featuredBlogPostId").then((res) => {
      setFeaturedBlogPostId(res.data?.value);
    });
  }

  async function saveSettings() {
    setIsLoading(true);
    await axios.put("/api/settings", {
      name: "featuredBlogPostId",
      value: featuredBlogPostId,
    });
    setIsLoading(false);
    await swal.fire({
      title: "Settings saved",
      icon: "success",
    });
  }

  return (
    <Layout>
      <h1>Settings</h1>
      {isLoading && <Spinner />}
      {!isLoading && (
        <>
          <label htmlFor="featuredBlogPost">Featured product</label>
          <select
            id="featuredBlogPost"
            value={featuredBlogPostId}
            onChange={(ev) => setFeaturedBlogPostId(ev.target.value)}
          >
            {blogPosts.length > 0 &&
              blogPosts.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.title}
                </option>
              ))}
          </select>
          <div>
            <button onClick={saveSettings} className="btn-primary">
              Save settings
            </button>
          </div>
        </>
      )}
    </Layout>
  );
}

export default withSwal(({ swal }) => <SettingsPage swal={swal} />);
