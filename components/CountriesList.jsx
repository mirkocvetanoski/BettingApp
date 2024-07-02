"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchCountries } from "@/utils/requests";
import CountriesListLink from "./CountriesListLink";
import Spinner from "./Spinner";

const CountriesList = () => {
  const pathname = usePathname();

  const slug =
    pathname === "/" ? "Football" : pathname.replace(/[^A-Za-z]+/g, "");

  const [countriesByCompetition, setCountriesByCompetition] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async (slug) => {
      const { countries } = await fetchCountries(slug);
      setCountriesByCompetition(countries);
    };

    fetchCountriesData(slug);
  }, [pathname]);

  if (countriesByCompetition.length === 0) {
    return <Spinner />;
  }

  return (
    <ul className="scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-slate-700 scrollbar-track-slate-300 text-surface mt-8 flex h-[550px] w-48 flex-col overflow-hidden overflow-y-scroll dark:text-neutral-300">
      {countriesByCompetition.map((country, index) => (
        <CountriesListLink
          key={index}
          competition={slug}
          country={country.GN}
        />
      ))}
    </ul>
  );
};

export default CountriesList;
