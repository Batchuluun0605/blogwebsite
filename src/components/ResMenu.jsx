import { useRouter } from "next/router";

export default function ResMenu() {
  const router = useRouter();
  const contact = () => {
    router.push("/contact");
  };
  const home = () => {
    router.push("/");
  };
  const blog = () => {
    router.push("/allblog");
  };
  return (
    <div className="text-center sm:hidden sm:z-30 bg-slate-200 flex ">
      <ul className="flex gap-10 text-center items-center max-sm:flex-col max-sm:gap-3 max-sm:p-4">
        <button onClick={home}>Home</button>
        <button onClick={blog}>Blog</button>
        <button onClick={contact}>Contact</button>
      </ul>
    </div>
  );
}
