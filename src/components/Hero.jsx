import { CAROUSEL_DATA } from "./CarouselData";
import { useState } from "react";
import LeftArrow from "./icon/LeftArrow";
import RightArrow from "./icon/RightArrow";
export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const Add = () => {
    if (activeIndex === 2) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex((activeIndex) => activeIndex + 1);
  };
  const Close = () => {
    if (activeIndex === 0) {
      setActiveIndex(2);
      return;
    }
    setActiveIndex((activeIndex) => activeIndex - 1);
  };
  return (
    <div className="max-sm:hidden">
      <div className="flex overflow-hidden">
        <div
          className="w-[1216px] h-[600px] bg-cover relative overflow-hidden"
          style={{ backgroundImage: `url(${CAROUSEL_DATA[activeIndex].url})` }}
        >
          <div className="w-[598px] p-10 bg-white flex flex-col gap-6 rounded-xl top-[320px] absolute left-[20px]">
            <button className="py-1 px-3 text-white bg-indigo-500 rounded w-fit ">
              {CAROUSEL_DATA[activeIndex].btn}
            </button>
            <h1 className="text-4xl w-fit ">
              {CAROUSEL_DATA[activeIndex].desc}
            </h1>
            <p>{CAROUSEL_DATA[activeIndex].date}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <div className="w-7 h-3 p-1" onClick={Close}>
          <LeftArrow />
        </div>
        <div className="w-7 h-3 p-1" onClick={Add}>
          <RightArrow />
        </div>
      </div>
    </div>
  );
}
