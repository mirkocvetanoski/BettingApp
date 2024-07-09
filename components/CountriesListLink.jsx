"use client";

import { fetchLeagues } from "@/utils/requests";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LeaguesList from "@/components/LeaguesList";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const CountriesListLink = ({ country }) => {
  const pathname = usePathname().replace(/[^A-Za-z]+/g, "");

  const [leagues, setLeagues] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = async () => {
    const { leagues: fetchedLeagues } = await fetchLeagues(country);
    setLeagues(fetchedLeagues);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={handleOnClick}
        className="group relative flex w-full items-center justify-between px-2.5 py-1.5 text-start"
      >
        <span
          className={`absolute bottom-0 left-0 h-0.5 w-0 bg-red-500 duration-300 group-hover:w-full group-hover:transition-all ${pathname.includes(country.replace(/[^A-Za-z]+/g, "")) ? "w-full" : ""}`}
        ></span>
        {country}
        <span className="text-[8px]">
          {isOpen ? <SlArrowUp /> : <SlArrowDown />}
        </span>
      </button>
      {isOpen && <LeaguesList leagues={leagues} />}
    </>
  );
};

export default CountriesListLink;
