import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function BlogDetail() {
  const [detail, setDetail] = useState(null);
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
  console.log(detail);
  return (
    <div className="w-[1920px] m-auto flex flex-col gap-[100px]">
      <section className="px-[350px]">
        <Navbar />
      </section>
      <section className="w-[800px] m-auto flex flex-col gap-8">
        {detail && (
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-4xl">{detail.description}</h1>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-2">
                <img
                  className="w-8 h-8 rounded-3xl"
                  src={detail.user.profile_image}
                />
                <p className="items-center">{detail.user.name}</p>
              </div>
              <div>{detail.last_comment_at}</div>
            </div>

            <div>
              <img src={detail.social_image} className="h-[462px] rounded-lg" />
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-xl text-slate-800">
                Traveling is an enriching experience that opens up new horizons,
                exposes us to different cultures, and creates memories that last
                a lifetime. However, traveling can also be stressful and
                overwhelming, especially if you don't plan and prepare
                adequately. In this blog article, we'll explore tips and tricks
                for a memorable journey and how to make the most of your
                travels. One of the most rewarding aspects of traveling is
                immersing yourself in the local culture and customs. This
                includes trying local cuisine, attending cultural events and
                festivals, and interacting with locals. Learning a few phrases
                in the local language can also go a long way in making
                connections and showing respect.
              </p>
              <div>
                <p className="text-2xl text-black">Research Your Destination</p>
                <p className="text-xl text-slate-800">
                  Before embarking on your journey, take the time to research
                  your destination. This includes understanding the local
                  culture, customs, and laws, as well as identifying top
                  attractions, restaurants, and accommodations. Doing so will
                  help you navigate your destination with confidence and avoid
                  any cultural faux pas. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. In hendrerit gravida rutrum quisque non
                  tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec
                  ullamcorper sit amet. Aenean euismod elementum nisi quis
                  eleifend quam adipiscing vitae. Viverra adipiscing at in
                  tellus.
                </p>
              </div>

              <div>
                <p className="text-2xl text-black">Plan Your Itinerary</p>
                <p className="text-xl text-slate-800">
                  While it's essential to leave room for spontaneity and
                  unexpected adventures, having a rough itinerary can help you
                  make the most of your time and budget. Identify the must-see
                  sights and experiences and prioritize them according to your
                  interests and preferences. This will help you avoid
                  overscheduling and ensure that you have time to relax and
                  enjoy your journey. Vitae sapien pellentesque habitant morbi
                  tristique. Luctus venenatis lectus magna fringilla. Nec
                  ullamcorper sit amet risus nullam eget felis. Tincidunt arcu
                  non sodales neque sodales ut etiam sit amet.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="px-[350px]">
        <Footer />
      </section>
    </div>
  );
}
