const MatchesFilterButton = ({ children }) => {
  return (
    <button className="text-md rounded-sm px-1 py-1 hover:bg-neutral-700 hover:text-red-500">
      {children}
    </button>
  );
};

export default MatchesFilterButton;
