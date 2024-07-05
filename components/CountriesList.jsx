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
    <ul className="scrollbar-track-rounded-full text-surface mt-8 flex h-[550px] w-48 flex-col items-start overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-track-slate-300 scrollbar-thumb-slate-700 dark:text-neutral-300">
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
