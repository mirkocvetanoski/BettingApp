"use client";

import { useGlobalContext } from "@/context/GlobalContext";

const MatchDetailComponent = () => {
  const { globalMatch, setGlobalMatch } = useGlobalContext();

  return <div className="text-neutral-300">{globalMatch.ID}</div>;
};

export default MatchDetailComponent;
