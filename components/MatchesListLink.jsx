"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext";

const MatchesListLink = ({ match }) => {
  const params = useParams();
  const competition = !params.id ? "Football" : params.id;

  const { globalMatch, setGlobalMatch } = useGlobalContext();

  return (
    <Link
      href={`/${competition}/${match.ID}`}
      className="flex w-full items-center gap-12 border-b-[1px] border-solid px-6 py-2 text-sm"
      onClick={() => {
        setGlobalMatch(match);
      }}
    >
      <span className="w-16 font-thin">
        {match.Status === "Finished"
          ? "Finished"
          : match.PlayTime.slice(-8, -3)}
      </span>
      <div>
        <span>{match.HomeTeam}</span>
        <br />
        <span>{match.AwayTeam}</span>
      </div>
      <div className="ml-auto text-right">
        <span>
          {match.Status === "Finished"
            ? `${Number(match.HomeTeam_SecondHalfGoals)}`
            : "-"}
        </span>
        <br />
        <span>
          {match.Status === "Finished"
            ? `${Number(match.AwayTeam_SecondHalfGoals)}`
            : "-"}
        </span>
      </div>
    </Link>
  );
};

export default MatchesListLink;
