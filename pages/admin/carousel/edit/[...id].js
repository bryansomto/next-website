import Layout from "@/components/admin/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CarouselForm from "@/components/admin/CarouselForm";

export default function EditCarouselPage() {
  const [carouselInfo, setCarouselInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/carouselForm?id=${id}`).then((response) => {
      setCarouselInfo(response.data);
    });
  }, [id]);

  return (
    <Layout>
      <h1>Edit Design</h1>
      {carouselInfo && <CarouselForm {...carouselInfo} />}
    </Layout>
  );
}
