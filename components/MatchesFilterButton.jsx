const MatchesFilterButton = ({ children, odds, setOdds }) => {
  return (
    <button
      onClick={() => setOdds(!odds)}
      className={`text-md rounded-sm px-1 py-1 hover:bg-neutral-700 hover:text-red-500 ${odds && "bg-neutral-700 text-red-500"}`}
    >
      {children}
    </button>
  );
};

export default MatchesFilterButton;
