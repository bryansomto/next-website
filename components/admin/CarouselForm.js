import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";

export default function CarouselForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  link: existingLink,
  images: existingImages,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [link, setLink] = useState(existingLink || "");
  const [images, setImages] = useState(existingImages || []);
  const [goToCarouselForm, setGoToCarouselForm] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  async function saveCarouselForm(ev) {
    ev.preventDefault();
    const data = {
      title,
      description,
      link,
      images,
    };
    if (_id) {
      //update
      await axios.put("/api/carouselForm", { ...data, _id });
    } else {
      //create
      await axios.post("/api/carouselForm", data);
    }
    setGoToCarouselForm(true);
  }

  if (goToCarouselForm) {
    router.push("/admin/carousel");
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

  return (
    <form onSubmit={saveCarouselForm} className="space-y-3">
      <div>
        <label>Carousel category</label>
        <input
          type="text"
          placeholder="Carousel category"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
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
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}
