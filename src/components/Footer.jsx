import FacebookIcon from "@/components/icon/Facebook";
import FooterLogo from "@/components/icon/FooterLogo";
import InIcon from "@/components/icon/In";
import InstagramIcon from "@/components/icon/Instagram";
import TwitterIcon from "@/components/icon/Twitter";
import { useRouter } from "next/router";

export default function Footer() {
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
    <div className="flex flex-col gap-12 max-sm:gap-0 w-full">
      <div className="flex justify-between max-sm:flex max-sm:flex-col max-sm:gap-2">
        <div className="flex flex-col gap-4 w-72 max-sm:hidden">
          <h3 className="text-xl">About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div>
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <div className="max-sm:flex max-sm:justify-center">
          <ul>
            <li className="cursor-pointer" onClick={home}>
              Home
            </li>
            <li className=" cursor-pointer" onClick={blog}>
              Blog
            </li>
            <li className="cursor-pointer" onClick={contact}>
              Contact
            </li>
          </ul>
        </div>
        <div className="flex gap-7 max-sm:flex max-sm:justify-center">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <InIcon />
        </div>
      </div>
      <div className="border-b-slate-900 border-b max-sm:hidden"></div>
      <div className="flex justify-between py-8">
        <div className="flex gap-2">
          <FooterLogo />
          <div>
            <h3 className="text-2xl">MetaBlog</h3>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="items-center max-sm:hidden">
          <ul className="flex gap-8 ">
            <li>Terms of Use</li>
            <div className=" border-r border-slate-950 flex gap-2"></div>
            <li>Privacy Policy </li>
            <div className=" border-r border-slate-950 flex gap-2"></div>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
