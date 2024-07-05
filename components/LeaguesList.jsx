const LeaguesList = ({ leagues }) => {
  return (
    <ul className="flex flex-col items-start gap-1 pl-4 text-xs">
      {leagues.map((league, index) => (
        <button
          className="rounded-sm px-1 py-1 hover:bg-neutral-700 hover:text-red-500"
          onClick={() => {
            console.log(league);
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
