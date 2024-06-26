import Link from "next/link";

const PopularSportsLink = ({ competition }) => {
  return (
    <Link
      href={`/competitions/${competition}`}
      className="group relative px-2.5 py-1.5"
    >
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-500 duration-300 group-hover:w-full group-hover:transition-all"></span>
      {competition}
    </Link>
  );
};

export default PopularSportsLink;
