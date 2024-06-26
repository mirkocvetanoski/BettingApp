import { fetchCompetitions } from "@/utils/requests";
import PopularSportsLink from "./PopularSportsLink";

export const dynamic = "force-dynamic";

const PopularSports = async () => {
  const { competitions } = await fetchCompetitions();

  const sortedCompetitions = competitions?.sort((a, b) => a.localeCompare(b));

  return (
    <ul className="grid h-fit auto-cols-max grid-flow-col grid-rows-3 items-center justify-items-center gap-x-1 gap-y-0.5 rounded-lg border border-solid border-neutral-800 px-5 py-4">
      {sortedCompetitions.map((competition, index) => (
        <PopularSportsLink key={index} competition={competition} />
      ))}
    </ul>
  );
};

export default PopularSports;
