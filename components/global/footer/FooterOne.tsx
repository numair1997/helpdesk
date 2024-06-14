import whiteLogo from "@/public/images/logo_white.png";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "../../../data/data";
import Counter from "../../ui/NumberCounter2";

function FooterOne() {
  return (
    <footer className="bg-n900 text-white">
      <div className="container">
        <div className="flex items-center justify-between gap-6 py-10 text-base font-medium max-lg:flex-col sm:text-lg lg:py-20 xl:text-xl">
          <ul className="flex items-center justify-start gap-4 sm:gap-6 lg:gap-10">
            <li>
              <Link className="duration-500 hover:text-r300" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="duration-500 hover:text-r300" href="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="duration-500 hover:text-r300" href="/faq">
                FAQ
              </Link>
            </li>
          </ul>
          <Link href="/index" className="">
            <Image src={whiteLogo} alt="" />
          </Link>
          <ul className="flex items-center justify-start gap-4 sm:gap-6 lg:gap-10">
            <li>
              <Link
                className="duration-500 hover:text-r300"
                href="/find-workers"
              >
                Find Work
              </Link>
            </li>
            <li>
              <Link className="duration-500 hover:text-r300" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="duration-500 hover:text-r300" href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-y border-n500">
        <div className="flex items-center justify-between lg:container max-xl:py-8 max-lg:flex-col max-lg:gap-6">
          <div className="">
            <div className="display-3 xl:display-2 text-center flex justify-center items-center">
              <Counter value={25} />k
            </div>
            <p className="max-w-[250px] text-center text-base font-medium xl:text-lg">
              Customers are satisfied with our work
            </p>
          </div>
          <div className="border-n500 px-6 py-12 max-lg:w-full max-lg:border-y lg:border-x xl:p-20 xxl:p-30">
            <div className="display-3 xl:display-2 text-center flex flex justify-center items-center">
              <Counter value={7} />
              k+
            </div>
            <p className="mx-auto max-w-[250px] text-center text-base font-medium max-lg:flex xl:text-lg">
              Websites are already existing work
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-5 sm:pl-4">
            <p className="text-lg font-medium">Subscribe to our newsletter</p>
            <div className="rounded-full border-2 border-white">
              <input
                type="text"
                className="bg-transparent px-2 outline-none placeholder:text-white max-[400px]:w-[200px] min-[400px]:px-4 lg:px-8"
                placeholder="Enter Email"
              />
              <button className="rounded-full border-2 border-white bg-y300 px-2 py-3 font-medium text-n900 sm:px-4 sm:py-4 xl:px-8">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between gap-6 py-8 font-medium max-md:flex-col">
        <div className="flex items-center justify-start gap-1">
          <p>Designed By</p>
          <Link href="" className="text-g200 underline">
            Pixelaxis
          </Link>
        </div>
        <div className="flex items-center justify-center gap-5 text-2xl">
          {socialLinks.slice(0, 3).map(({ id, icon, link }) => (
            <Link href={link} key={id}>
              {icon}
            </Link>
          ))}
        </div>
        <p>Copyright @ {new Date().getFullYear()} Servibe</p>
      </div>
    </footer>
  );
}

export default FooterOne;
