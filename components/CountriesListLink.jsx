"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CountriesListLink = ({ competition, country }) => {
  const pathname = usePathname().replace(/[^A-Za-z]+/g, "");

  return (
    <Link
      href={`/${competition}/${country}`}
      className="group relative px-2.5 py-1.5"
    >
      <span
        className={`absolute bottom-0 left-0 h-0.5 w-0 bg-red-500 duration-300 group-hover:w-full group-hover:transition-all ${pathname.includes(country.replace(/[^A-Za-z]+/g, "")) ? "w-full" : ""}`}
      ></span>
      {country}
    </Link>
  );
};

export default CountriesListLink;
