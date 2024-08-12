import BlogPostsGrid from "@/components/BlogPostsGrid";
import Center from "@/components/Center";
import { BlogNavbar, Navbar } from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import Title from "@/components/Title";
import { bg4, primary } from "@/lib/colors";
import { BlogPost } from "@/models/BlogPost";
import { Category } from "@/models/Category";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 1.5em;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const FiltersWrapper = styled.div`
  display: flex;
`;

const Filter = styled.div`
  background-color: #000000;
  color: ${bg4};
  padding: 0px 5px;
  margin-right: 8px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  select,
  span {
    background-color: transparent;
    border: 0;
    font-size: 0.8rem;
  }
  span {
    margin-top: 1px;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0px 10px;
    select,
    span {
      font-size: inherit;
    }
  }
`;

export default function CategoryPage({
  category,
  subCategories,
  blogPosts: originalBlogPosts,
}) {
  const defaultSorting = "_id-desc";
  const defaultFilterValues = category.properties.map((p) => ({
    name: p.name,
    value: "all",
  }));
  const [blogPosts, setBlogPosts] = useState(originalBlogPosts);
  const [filtersValues, setFiltersValues] = useState(defaultFilterValues);
  const [sort, setSort] = useState(defaultSorting);
  const [loadingBlogPosts, setLoadingBlogPosts] = useState(false);
  const [filtersChanged, setFiltersChanged] = useState(false);
  const [mobileFiltersActive, setFiltersActive] = useState(false);

  function handleFilterChange(filterName, filterValue) {
    setFiltersValues((prev) => {
      return prev.map((p) => ({
        name: p.name,
        value: p.name === filterName ? filterValue : p.value,
      }));
    });
    setFiltersChanged(true);
  }
  useEffect(() => {
    if (!filtersChanged) {
      return;
    }
    setLoadingBlogPosts(true);
    const catIds = [category._id, ...(subCategories?.map((c) => c._id) || [])];
    const params = new URLSearchParams();
    params.set("categories", catIds.join(","));
    params.set("sort", sort);
    filtersValues.forEach((f) => {
      if (f.value !== "all") {
        params.set(f.name, f.value);
      }
    });
    const url = `/api/blogPostsClient?` + params.toString();
    axios.get(url).then((res) => {
      setBlogPosts(res.data);
      setLoadingBlogPosts(false);
    });
  }, [filtersValues, sort, filtersChanged]);
  return (
    <>
      <Navbar />
      <BlogNavbar />
      <Center>
        <CategoryHeader>
          <Title>{category.name}</Title>

          <FiltersWrapper mobileFiltersActive={mobileFiltersActive}>
            <Filter>
              <span>Sort:</span>
              <select
                value={sort}
                onChange={(ev) => {
                  setSort(ev.target.value);
                  setFiltersChanged(true);
                }}
              >
                <option value="_id-desc">newest first</option>
                <option value="_id-asc">oldest first</option>
              </select>
            </Filter>
          </FiltersWrapper>
        </CategoryHeader>
        {loadingBlogPosts && <Spinner fullWidth />}
        {!loadingBlogPosts && (
          <div>
            {blogPosts.length > 0 && <BlogPostsGrid blogPosts={blogPosts} />}
            {blogPosts.length === 0 && <div>Sorry, no blog post found</div>}
          </div>
        )}
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  const category = await Category.findById(context.query.id);
  const subCategories = await Category.find({ parent: category._id });
  const catIds = [category._id, ...subCategories.map((c) => c._id)];
  const blogPosts = await BlogPost.find({ category: catIds });
  return {
    props: {
      category: JSON.parse(JSON.stringify(category)),
      subCategories: JSON.parse(JSON.stringify(subCategories)),
      blogPosts: JSON.parse(JSON.stringify(blogPosts)),
    },
  };
}
