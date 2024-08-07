import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";

export default function BlogPostForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  link: existingLink,
  images: existingImages,
  category: assignedCategory,
  properties: assignedProperties,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [category, setCategory] = useState(assignedCategory || "");
  const [blogPostProperties, setBlogPostProperties] = useState(
    assignedProperties || {}
  );
  const [description, setDescription] = useState(existingDescription || "");
  const [link, setLink] = useState(existingLink || "");
  const [images, setImages] = useState(existingImages || []);
  const [goToBlogPosts, setGoToBlogPosts] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  useEffect(() => {
    axios.get("/api/categories").then((result) => {
      setCategories(result.data);
    });
  }, []);

  async function saveBlogPost(ev) {
    ev.preventDefault();
    const data = {
      title,
      description,
      link,
      images,
      category,
      properties: blogPostProperties,
    };
    if (_id) {
      //update
      await axios.put("/api/blogPosts", { ...data, _id });
    } else {
      //create
      await axios.post("/api/blogPosts", data);
    }
    setGoToBlogPosts(true);
  }

  if (goToBlogPosts) {
    router.push("/admin/blogPosts");
  }

  async function uploadImages(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
      setIsUploading(false);
    }
  }

  function updateImagesOrder(images) {
    setImages(images);
  }

  function setBlogPostProp(propName, value) {
    setBlogPostProperties((prev) => {
      const newBlogPostProps = { ...prev };
      newBlogPostProps[propName] = value;
      return newBlogPostProps;
    });
  }

  const propertiesToFill = [];
  if (categories.length > 0 && category) {
    let catInfo = categories.find(({ _id }) => _id === category);
    propertiesToFill.push(...catInfo.properties);
    while (catInfo?.parent?._id) {
      const parentCat = categories.find(
        ({ _id }) => _id === catInfo?.parent?._id
      );
      propertiesToFill.push(...parentCat.properties);
      catInfo = parentCat;
    }
  }

  return (
    <form onSubmit={saveBlogPost} className="space-y-3">
      <div>
        <label>Post title</label>
        <input
          type="text"
          placeholder="Blog post title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
      </div>

      <div>
        <label>Category</label>
        <select
          value={category}
          onChange={(ev) => setCategory(ev.target.value)}
        >
          <option value="">Uncategorised</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
        {propertiesToFill.length > 0 &&
          propertiesToFill.map((p) => (
            <div key={p._id}>
              <label>{p.name[0]?.toUpperCase() + p.name.substring(1)}</label>
              <div>
                <select
                  value={blogPostProperties[p.name]}
                  onChange={(ev) => setBlogPostProp(p.name, ev.target.value)}
                >
                  {p.values.map((v) => (
                    <option key={v._id} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
      </div>
      <div>
        <label>Photos</label>
        <div className="mb-2 flex flex-wrap gap-1">
          <ReactSortable
            list={images}
            className="flex flex-wrap gap-1"
            setList={updateImagesOrder}
          >
            {!!images?.length &&
              images.map((link) => (
                <div
                  key={link}
                  className="h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200"
                >
                  <img src={link} alt="" />
                </div>
              ))}
          </ReactSortable>
          {isUploading && (
            <div className="h-24 flex items-center">
              <Spinner />
            </div>
          )}
          <label className="w-24 h-24 cursor-pointer text-center flex items-center justify-center text-sm gap-1 text-gray-800 rounded-sm bg-white shadow-sm border border-gray-200 hover:text-base focus:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <div>Upload</div>
            <input type="file" onChange={uploadImages} className="hidden" />
          </label>
        </div>
      </div>
      <div>
        <label>Description</label>
        <textarea
          className="input h-20 py-3"
          placeholder="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
      </div>
      <div>
        <label>Link</label>
        <input
          type="text"
          placeholder="link"
          value={link}
          onChange={(ev) => setLink(ev.target.value)}
        />
      </div>
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}
