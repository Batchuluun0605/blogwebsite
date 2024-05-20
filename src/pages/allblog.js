import AllBlog from "@/components/AllBlog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
const api = "https://dev.to/api/articles";

export const dataContext = createContext([]);
export default function AllBlogRender() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const initData = useRef([]);
  const getData = async () => {
    let res = await axios.get(api);
    initData.current = res.data;
    setData(res.data);
  };
  useEffect(() => {
    getData(api);
  }, []);
  return (
    <dataContext.Provider
      value={{ data, query, setQuery }}
      className="w-[1920px] flex flex-col gap-24 m-auto max-sm:w-[600px] max-sm:px-10"
    >
      <section className="px-[350px] max-sm:px-0">
        <Navbar />
      </section>
      <section className="px-[350px] max-sm:px-0 max-sm:flex max-sm:mx-auto">
        <AllBlog />
      </section>
      <section className="px-[350px] mt-10  max-sm:mx-auto bg-slate-100 py-16 max-sm:px-[190px]">
        <Footer />
      </section>
    </dataContext.Provider>
  );
}
