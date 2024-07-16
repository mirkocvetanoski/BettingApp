const MatchesFilterButton = ({
  children,
  odds,
  setOdds,
  onAllMatches,
  onFinishedMatches,
  onFutureMatches,
  matchesShown,
}) => {
  return (
    <button
      onClick={() => {
        if (children === "ODDS") {
          setOdds(!odds);
        }
        if (children === "ALL") {
          onAllMatches();
        }
        if (children === "FINISHED") {
          onFinishedMatches();
        }
        if (children === "SCHEDULED") {
          onFutureMatches();
        }
      }}
      className={`text-md rounded-sm px-1 py-1 hover:bg-neutral-700 hover:text-red-500 ${(odds || matchesShown === children) && "bg-neutral-700 text-red-500"}`}
    >
      {children}
    </button>
  );
};

export default MatchesFilterButton;
