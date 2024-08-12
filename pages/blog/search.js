import BlogPostBox from "@/components/BlogPostBox";
import BlogPostsGrid from "@/components/BlogPostsGrid";
import Center from "@/components/Center";
import { BlogNavbar, Navbar } from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: sticky;
  top: 80px;
  margin: 20px 0;
  padding: 5px 0;
  background-color: #eeeeeeaa;
`;

export default function SearchBlog() {
  const [phrase, setPhrase] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearch = useCallback(debounce(searchBlogPosts, 500), []);
  useEffect(() => {
    if (phrase?.length > 0) {
      setIsLoading(true);
      debouncedSearch(phrase);
    } else {
      setBlogPosts([]);
    }
  }, [phrase]);
  function searchBlogPosts(phrase) {
    axios
      .get("/api/blogPostsClient?phrase=" + encodeURIComponent(phrase))
      .then((response) => {
        setBlogPosts(response.data);
        setIsLoading(false);
      });
  }
  return (
    <>
      <Navbar />
      <BlogNavbar />
      <Center>
        <InputWrapper>
          <input
            className="input"
            title="title"
            type="text"
            placeholder="Search blog posts..."
            required
            value={phrase}
            onChange={(e) => {
              setPhrase(e.target.value);
            }}
          />
        </InputWrapper>
        {!isLoading && phrase !== "" && blogPosts.length === 0 && (
          <h2>No posts found for &quot;{phrase}&quot;</h2>
        )}
        {isLoading && <Spinner fullWidth={true} />}
        {!isLoading && blogPosts.length > 0 && (
          <BlogPostsGrid blogPosts={blogPosts} />
        )}
      </Center>
    </>
  );
}
