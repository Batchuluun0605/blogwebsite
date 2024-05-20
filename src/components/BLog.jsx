import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const api = "https://dev.to/api/articles";
import Link from "next/link";

export default function BlogData() {
  const [data, setData] = useState([]);
  const initData = useRef([]);
  const router = useRouter();
  const view = () => {};
  const getData = async () => {
    let res = await axios.get(api);
    initData.current = res.data;
    setData(res.data);
  };
  const reset = () => setData(initData.current);

  const filter = (tag) => {
    setData(() =>
      initData.current.filter((el) => el.tag_list.some((c) => c.includes(tag)))
    );
  };
  const [add, setAdd] = useState(9);

  const handler = () => {
    setAdd((add) => add + 3);
  };
  useEffect(() => {
    getData(api);
  }, []);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between max-sm:hidden">
        <div className="flex gap-5">
          <button className=" text-yellow-400" onClick={reset}>
            All
          </button>
          <button onClick={() => filter("webdev")}>webdev</button>
          <button onClick={() => filter("discuss")}>discuss</button>
          <button onClick={() => filter("watercooler")}>watercooler</button>
          <button onClick={() => filter("top7")}>top7</button>

          <br />
        </div>
        <div>
          <button onClick={view}>View All</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 mt-10 max-sm:flex max-sm:flex-col max-sm:mx-auto">
        {data.slice(0, add).map((e) => {
          let key = uuidv4();
          return (
            <div
              className="border-solid border border-gray-300 w-[392px] rounded-xl py-4 flex "
              key={key}
            >
              <Link href={`/blogdetail/${e.id}`}>
                <div className="p-4 flex  gap-4 flex-col ">
                  <div className="w-[360px] h-60 ">
                    <img
                      src={e.social_image}
                      alt=""
                      className="rounded-xl h-60"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-1 flex-wrap">
                      <button className=" bg-slate-300 text-purple-500 py-1 px-3 rounded-xl w-fit flex gap-2">
                        {e.tags}
                      </button>
                    </div>

                    <h2 className=" text-2xl">{e.description}</h2>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-3xl"
                      src={e.user.profile_image}
                      alt=""
                    />
                    <p className="flex items-center">{e.published_timestamp}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="border-solid border-slate-900 border text-center m-auto w-fit rounded">
        <button className="py-2 px-5 text-gray-500" onClick={handler}>
          Load more
        </button>
      </div>
    </div>
  );
}
