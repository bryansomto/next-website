import Layout from "@/components/admin/Layout";
import DesignForm from "@/components/admin/DesignForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditDesignPage() {
  const [designInfo, setDesignInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/designs?id=${id}`).then((response) => {
      setDesignInfo(response.data);
    });
  }, [id]);

  return (
    <Layout>
      <h1>Edit Design</h1>
      {designInfo && <DesignForm {...designInfo} />}
    </Layout>
  );
}
