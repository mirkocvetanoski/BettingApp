"use client";

import { fetchMatches } from "@/utils/requests";
import { useParams } from "next/navigation";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/mira/theme.css";
import { useEffect } from "react";
import { useState } from "react";
import MatchesFilterButton from "./MatchesFilterButton";
import MatchesListLink from "./MatchesListLink";
import Spinner from "./Spinner";

const MatchesList = () => {
  const today = new Date();
  const minDate = new Date();
  const maxDate = new Date();
  minDate.setDate(today.getDate() - 5);
  maxDate.setDate(today.getDate() + 5);

  const [date, setDate] = useState(today);

  const formatedDate = `${date.getFullYear()}-${date.getMonth().toString().length === 1 ? `0${(date.getMonth() + 1).toString()}` : `${(date.getMonth() + 1).toString()}`}-${date.getDate().toString().length === 1 ? `0${date.getDate().toString()}` : `${date.getDate().toString()}`}`;

  const params = useParams();
  const slug = !params.id ? "Football" : params.id;

  const [matches, setMatches] = useState([]);
  const [odds, setOdds] = useState(false);
  const [matchesShown, setMatchesShown] = useState("ALL");

  useEffect(() => {
    const fetchMatchesData = async () => {
      const data = await fetchMatches(slug, formatedDate);
      setMatches(data.matches);
    };

    fetchMatchesData();
  }, [date, slug]);

  const handleAllMatches = () => {
    const fetchMatchesData = async () => {
      const data = await fetchMatches(slug, formatedDate);
      setMatches(data.matches);
      setMatchesShown("ALL");
    };

    fetchMatchesData();
  };

  const handleFilterFinishedMatches = async () => {
    const data = await fetchMatches(slug, formatedDate);
    const finishedMatches = data.matches.filter(
      (match) => match.Status === "Finished",
    );
    setMatches(finishedMatches);
    setMatchesShown("FINISHED");
  };

  const handleFilterFutureMatches = async () => {
    const data = await fetchMatches(slug, formatedDate);
    const futureMatches = data.matches.filter(
      (match) => match.Status !== "Finished",
    );
    setMatches(futureMatches);
    setMatchesShown("SCHEDULED");
  };

  if (matches.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="relative mt-8 flex h-fit w-3/4 flex-col items-start justify-start rounded-lg border border-solid border-neutral-800 px-5 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MatchesFilterButton odds={odds} setOdds={setOdds}>
            ODDS
          </MatchesFilterButton>
          <MatchesFilterButton
            onAllMatches={handleAllMatches}
            matchesShown={matchesShown}
          >
            ALL
          </MatchesFilterButton>
          <MatchesFilterButton
            onFinishedMatches={handleFilterFinishedMatches}
            matchesShown={matchesShown}
          >
            FINISHED
          </MatchesFilterButton>
          <MatchesFilterButton
            onFutureMatches={handleFilterFutureMatches}
            matchesShown={matchesShown}
          >
            SCHEDULED
          </MatchesFilterButton>
        </div>
      </div>
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        dateFormat="dd/mm/yy"
        showIcon
        minDate={minDate}
        maxDate={maxDate}
        className="absolute right-4 top-4 px-1 py-1"
      />

      <ul className="flex w-full flex-col gap-3 px-6 py-2">
        {matches.map((match, index) => (
          <MatchesListLink key={index} match={match} odds={odds} />
        ))}
      </ul>
    </div>
  );
};

export default MatchesList;
