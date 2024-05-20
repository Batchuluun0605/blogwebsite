import { useContext } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { dataContext } from "@/pages/allblog";
export default function AllBlog() {
  const { data, query } = useContext(dataContext);
  const queryData = data.filter((e) => {
    if (query === "") {
      return e;
    } else {
      return e?.tag_list[0].includes(query);
    }
  });
  return (
    <div>
      <div className="flex flex-wrap gap-5 justify-between mt-10 max-sm:flex max-sm:flex-col ">
        {queryData.map((e) => {
          let key = uuidv4();
          return (
            <div
              className="border-solid border border-gray-300 w-[392px] rounded-xl py-4"
              key={key}
            >
              <Link href={`blogdetail/${e.id}`}>
                <div className="p-4 flex flex-col gap-4 ">
                  <div className="w-[360px] h-60 ">
                    <img
                      src={e.social_image}
                      alt=""
                      className="rounded-xl h-60"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-1">
                      {e &&
                        e?.tag_list.slice(0, 1).map((t) => (
                          <button
                            key={t}
                            className=" bg-slate-300 text-purple-500 py-1 px-3 rounded-xl w-fit"
                          >
                            {t}
                          </button>
                        ))}
                    </div>

                    <h2 className=" text-2xl">{e.description}</h2>
                  </div>
                  <div>
                    <p>{e.published_timestamp}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
