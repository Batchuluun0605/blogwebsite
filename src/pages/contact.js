import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <section className="w-full flex flex-col gap-28 m-auto max-sm:w-[800px] max-sm:px-10 max-sm:mx-auto box-border">
      <div className="px-[350px] max-sm:px-20">
        <Navbar />
      </div>
      <div className="px-[350px] m-auto max-sm:px-0">
        <ContactUs />
      </div>
      <section className="px-[350px] w-full  max-sm:mx-auto bg-slate-100 py-16 max-sm:px-[190px]">
        <Footer />
      </section>
    </section>
  );
}
