const MatchesFilterButton = ({
  children,
  odds,
  setOdds,
  onAllMatches,
  onFinishedMatches,
  onFutureMatches,
  isActiveFinished,
  setIsActiveFinished,
  isActiveFuture,
  setIsActiveFuture,
  isActiveAll,
  setIsActiveAll,
}) => {
  return (
    <button
      onClick={() => {
        if (children === "ODDS") {
          setOdds(!odds);
        }
        if (children === "ALL") {
          onAllMatches();
          setIsActiveAll(!isActiveAll);
          setIsActiveFinished(false);
          setIsActiveFuture(false);
        }
        if (children === "FINISHED") {
          onFinishedMatches();
          setIsActiveAll(false);
          setIsActiveFinished(!isActiveFinished);
        }
        if (children === "SCHEDULED") {
          onFutureMatches();
          setIsActiveAll(false);
          setIsActiveFuture(!isActiveFuture);
        }
      }}
      className={`text-md rounded-sm px-1 py-1 hover:bg-neutral-700 hover:text-red-500 ${(odds || isActiveAll || isActiveFinished || isActiveFuture) && "bg-neutral-700 text-red-500"}`}
    >
      {children}
    </button>
  );
};

export default MatchesFilterButton;
