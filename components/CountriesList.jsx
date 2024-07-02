"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchCountries } from "@/utils/requests";
import CountriesListLink from "./CountriesListLink";
import Spinner from "./Spinner";

const CountriesList = () => {
  const pathname = usePathname();

  const slug =
    pathname === "/" ? "Football" : usePathname().replace(/[^A-Za-z]+/g, "");

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
    <ul className="mt-8 flex h-[400px] w-48 flex-col gap-1 overflow-hidden overflow-y-scroll">
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
