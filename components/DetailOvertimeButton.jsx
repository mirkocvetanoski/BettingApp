const DetailOvertimeButton = ({ overTime, setOverTime, children }) => {
  return (
    <button
      className={`rounded-sm px-1 py-1 hover:bg-neutral-700 hover:text-red-500 ${overTime === children ? "bg-neutral-700 text-red-500" : ""}`}
      onClick={() => {
        setOverTime(children);
      }}
    >
      {children}
    </button>
  );
};

export default DetailOvertimeButton;
