import Layout from "@/components/admin/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteCarouselPage() {
  const router = useRouter();
  const [carouselInfo, setCarouselInfo] = useState();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/carouselForm?id=${id}`).then((response) => {
      setCarouselInfo(response.data);
    });
  }, [id]);

  function goBack() {
    router.push("/admin/carousel");
  }

  async function deleteCarousel() {
    await axios.delete(`/api/carouselForm?id=${id}`);
    goBack();
  }

  return (
    <Layout>
      <h1 className="text-center">
        Do you really want to delete &#34;{carouselInfo?.title}&#34;?
      </h1>
      <div className="flex gap-2 justify-center">
        <button className="btn-red" onClick={deleteCarousel}>
          Yes
        </button>
        <button className="btn-default" onClick={goBack}>
          No
        </button>
      </div>
    </Layout>
  );
}
