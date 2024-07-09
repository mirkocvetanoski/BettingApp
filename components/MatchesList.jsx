"use client";

import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/mira/theme.css";
import { useState } from "react";
import MatchesFilterButton from "./MatchesFilterButton";

const MatchesList = () => {
  const [date, setDate] = useState(null);

  const TODAY = new Date();
  const minDate = new Date();
  const maxDate = new Date();
  minDate.setDate(TODAY.getDate() - 5);
  maxDate.setDate(TODAY.getDate() + 5);

  return (
    <div className="relative mt-8 flex h-[550px] w-3/4 flex-col items-start justify-start rounded-lg border border-solid border-neutral-800 px-5 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MatchesFilterButton>LIVE</MatchesFilterButton>
          <MatchesFilterButton>ODDS</MatchesFilterButton>
          <MatchesFilterButton>FINISHED</MatchesFilterButton>
          <MatchesFilterButton>SCHEDULED</MatchesFilterButton>
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

      <div>Matches</div>
    </div>
  );
};

export default MatchesList;
