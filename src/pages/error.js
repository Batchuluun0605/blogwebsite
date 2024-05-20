import Error from "@/components/Error";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ErrorB() {
  return (
    <section className="flex flex-col gap-28 w-[1920px] m-auto">
      <div className="px-[350px]">
        <Navbar />
      </div>
      <div className="px-[350px]">
        <Error />
      </div>
      <div className="px-[350px]">
        <Footer />
      </div>
    </section>
  );
}
