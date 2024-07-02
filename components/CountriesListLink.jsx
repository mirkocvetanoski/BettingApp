import Link from "next/link";

const CountriesListLink = ({ competition, country }) => {
  return (
    <Link href={`/${competition}/${country}`}>
      <span>{country}</span>
    </Link>
  );
};

export default CountriesListLink;
