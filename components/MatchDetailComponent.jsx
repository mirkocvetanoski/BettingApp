"use client";

import { useGlobalContext } from "@/context/GlobalContext";

const MatchDetailComponent = () => {
  const { globalMatch, setGlobalMatch } = useGlobalContext();

  return (
    <div className="flex w-2/4 flex-col items-center justify-start gap-1 text-neutral-300">
      <span className="text-lg font-thin underline underline-offset-4">
        Competition: {globalMatch.Competition}
      </span>

      <span className="flex w-max items-center gap-2 text-lg font-thin underline underline-offset-4">
        <p>Playtime:</p>
        {globalMatch.Status === "Finished"
          ? "Finished"
          : globalMatch.PlayTime.slice(-8, -3)}
      </span>

      <span className="text-lg font-thin underline underline-offset-4">
        Country: {globalMatch.Country}
      </span>

      <span className="text-lg font-thin underline underline-offset-4">
        League: {globalMatch.League}
      </span>

      <div className="mt-5 flex w-full items-start justify-around border-t-[1px] border-neutral-700 p-4 text-xl font-bold text-neutral-300">
        <div className="flex w-[400px] flex-col items-center">
          <span className="w-max">{globalMatch.HomeTeam}</span>
          <span className="text-xs font-extralight text-yellow-600">
            ({globalMatch.HomeWin_Odd})
          </span>
          <span
            className={`mt-4 ${globalMatch.Status === "Finished" ? "text-green-600" : "text-orange-600"}`}
          >
            {Number(globalMatch.HomeTeam_SecondHalfGoals)}
          </span>
        </div>
        <div className="flex w-[400px] flex-col items-center">
          <p className="flex w-max flex-col items-center text-center">
            Draw:
            <span className="text-xs font-extralight text-yellow-600">
              ({globalMatch.Draw_Odd})
            </span>
          </p>
        </div>

        <div className="flex w-[400px] flex-col items-center">
          <span className="w-max">{globalMatch.AwayTeam}</span>
          <span className="text-xs font-extralight text-yellow-600">
            ({globalMatch.AwayWin_Odd})
          </span>
          <span
            className={`mt-4 ${globalMatch.Status === "Finished" ? "text-green-600" : "text-orange-600"}`}
          >
            {Number(globalMatch.AwayTeam_SecondHalfGoals)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MatchDetailComponent;
