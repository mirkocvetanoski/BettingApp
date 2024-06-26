"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PopularSportsLink = ({ competition }) => {
  const pathname = usePathname();

  return (
    <Link href={`/${competition}`} className="group relative px-2.5 py-1.5">
      <span
        className={`absolute bottom-0 left-0 h-0.5 w-0 bg-red-500 duration-300 group-hover:w-full group-hover:transition-all ${pathname.includes(competition) ? "w-full" : ""}`}
      ></span>
      {competition.charAt(0).toUpperCase() + competition.slice(1)}
    </Link>
  );
};

export default PopularSportsLink;
