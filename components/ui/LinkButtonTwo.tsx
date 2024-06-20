import Link from "next/link";

function LinkButtonTwo({ link, text }: { link: string; text: string }) {
  return (
    <Link
      href={link}
      className="relative flex items-center justify-center overflow-hidden rounded-full bg-black px-8 py-3 font-medium  text-white"
    >
      <span className="m relative z-10 font-semibold">{text}</span>
    </Link>
  );
}

export default LinkButtonTwo;
