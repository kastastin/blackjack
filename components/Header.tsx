import Link from "next/link";
import { TiArrowBackOutline, TiInfoOutline } from "react-icons/ti";

export default function Header({ height }: { height?: string }) {
  return (
    <header
      className={`container flex items-center justify-between bg-[#334048] text-3xl text-white ${height}`}
    >
      <Link href="/" className="cursor-pointer hover:text-white/[.8]">
        <TiArrowBackOutline />
      </Link>
      <h1 className="mt-[5px] cursor-default font-great-vibes font-semibold tracking-wide">
        Blackjack
      </h1>
      <button className="cursor-pointer hover:text-white/[.8]">
        <TiInfoOutline />
      </button>
    </header>
  );
}
