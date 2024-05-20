import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function BlogDetail() {
  const [detail, setDetail] = useState();
  const router = useRouter();

  const fetchDetail = async () => {
    const BASE_URL = "https://dev.to/api/articles";
    const res = await axios.get(BASE_URL + "/" + router.query.id);
    setDetail(res.data);
  };

  useEffect(() => {
    if (router.isReady) {
      fetchDetail();
    }
  }, [router.isReady]);

  return <div>{detail && JSON.stringify(detail, 2, null)}</div>;
}
