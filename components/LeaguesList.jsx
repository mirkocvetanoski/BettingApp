"use client";

import { useState } from "react";

const LeaguesList = ({ leagues }) => {
  const [activeLeague, setActiveLeague] = useState("");

  const handleOnClick = (e) => {
    setActiveLeague(e.target.innerHTML);
  };

  return (
    <ul className="flex flex-col items-start gap-1 pl-4 text-xs">
      {leagues.map((league, index) => (
        <button
          className={`w-full rounded-sm px-1 py-1 text-start hover:bg-neutral-700 hover:text-red-500 ${activeLeague === league.LN ? "bg-neutral-700 text-red-500" : ""}`}
          onClick={(e) => {
            handleOnClick(e);
          }}
          key={index}
        >
          {league.LN}
        </button>
      ))}
    </ul>
  );
};

export default LeaguesList;
