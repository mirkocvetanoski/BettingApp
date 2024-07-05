"use client";

import { fetchLeagues } from "@/utils/requests";
import { usePathname } from "next/navigation";
import { useState } from "react";

const CountriesListLink = ({ country }) => {
  const pathname = usePathname().replace(/[^A-Za-z]+/g, "");

  const [leagues, setLeagues] = useState([]);

  const handleOnClick = async () => {
    const { leagues: fetchedLeagues } = await fetchLeagues(country);
    setLeagues(fetchedLeagues);
  };

  return (
    <>
      <button onClick={handleOnClick} className="group relative px-2.5 py-1.5">
        <span
          className={`absolute bottom-0 left-0 h-0.5 w-0 bg-red-500 duration-300 group-hover:w-full group-hover:transition-all ${pathname.includes(country.replace(/[^A-Za-z]+/g, "")) ? "w-full" : ""}`}
        ></span>
        {country}
      </button>
      <ul>
        {leagues.map((league, index) => (
          <li key={index}>{league.LN}</li>
        ))}
      </ul>
    </>
  );
};

export default CountriesListLink;
