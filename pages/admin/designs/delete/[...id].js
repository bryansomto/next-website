import Layout from "@/components/admin/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteDesignPage() {
  const router = useRouter();
  const [designInfo, setDesignInfo] = useState();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/designs?id=${id}`).then((response) => {
      setDesignInfo(response.data);
    });
  }, [id]);

  function goBack() {
    router.push("/admin/designs");
  }

  async function deleteDesign() {
    await axios.delete(`/api/designs?id=${id}`);
    goBack();
  }

  return (
    <Layout>
      <h1 className="text-center">
        Do you really want to delete &#34;{designInfo?.title}&#34;?
      </h1>
      <div className="flex gap-2 justify-center">
        <button className="btn-red" onClick={deleteDesign}>
          Yes
        </button>
        <button className="btn-default" onClick={goBack}>
          No
        </button>
      </div>
    </Layout>
  );
}
