"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import { useState } from "react";
import DetailAwayTeam from "./DetailAwayTeam";
import DetailDraw from "./DetailDraw";
import { DetailHomeTeam } from "./DetailHomeTeam";
import DetailMatchInfo from "./DetailMatchInfo";
import DetailOvertimeButton from "./DetailOvertimeButton";

const MatchDetailComponent = () => {
  const { globalMatch, setGlobalMatch } = useGlobalContext();
  const [overTime, setOverTime] = useState("Fulltime");

  return (
    <div className="flex w-2/4 flex-col items-center justify-start gap-1 text-neutral-300">
      <DetailMatchInfo match={globalMatch} />
      <div className="mt-5 flex w-full items-start justify-around border-t-[1px] border-neutral-700 p-4 text-xl font-bold text-neutral-300">
        <div className="self-center text-xs font-extralight">
          <DetailOvertimeButton overTime={overTime} setOverTime={setOverTime}>
            Halftime
          </DetailOvertimeButton>
          <DetailOvertimeButton overTime={overTime} setOverTime={setOverTime}>
            Fulltime
          </DetailOvertimeButton>
        </div>
        <DetailHomeTeam overTime={overTime} match={globalMatch} />
        <DetailDraw match={globalMatch} />
        <DetailAwayTeam overTime={overTime} match={globalMatch} />
      </div>
    </div>
  );
};

export default MatchDetailComponent;
