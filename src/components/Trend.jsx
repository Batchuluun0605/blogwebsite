import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const api = "https://dev.to/api/articles?username=gereltuyamz";
export default function TrendData() {
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await axios.get(api);
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-wrap gap-5 max-sm:flex max-sm:flex-col">
      {data.slice(0, 4).map((e) => {
        let key = uuidv4();
        return (
          <div
            key={key}
            className="w-72 h-80 rounded-xl bg-cover max-sm:w-[400px] max-sm:h-[320px]"
            style={{ backgroundImage: `url(${e.social_image})` }}
          >
            <div className="pt-44 pl-7 flex flex-col gap-4">
              <button className="py-1 px-3 text-white bg-indigo-500 rounded w-fit ">
                {e.tags}
              </button>
              <h2 className="text-white text-lg">{e.description}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
