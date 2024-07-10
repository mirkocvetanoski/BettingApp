"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const MatchesListLink = ({ match }) => {
  const params = useParams();
  const competition = !params.id ? "Football" : params.id;

  return (
    <Link
      href={`/${competition}/${match.ID}`}
      className="flex w-full items-center gap-12 border-b-[1px] border-solid px-6 py-2 text-sm"
    >
      <span className="font-thin">
        {match.Status === "Finished" ? "Finished" : match.PlayTime.slice(-7)}
      </span>
      <div>
        <span>{match.HomeTeam}</span>
        <br />
        <span>{match.AwayTeam}</span>
      </div>
      <div className="ml-auto">
        <span>
          {Number(match.HomeTeam_FirstHalfGoals) +
            Number(match.HomeTeam_SecondHalfGoals)}
        </span>
        <br />
        <span>
          {Number(match.AwayTeam_FirstHalfGoals) +
            Number(match.AwayTeam_SecondHalfGoals)}
        </span>
      </div>
    </Link>
  );
};

export default MatchesListLink;
