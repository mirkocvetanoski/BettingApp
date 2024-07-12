const DetailAwayTeam = ({ overTime, match }) => {
  return (
    <div className="flex w-[400px] flex-col items-center">
      <span className="w-max">{match.AwayTeam}</span>
      <span className="text-xs font-extralight text-yellow-600">
        ({Number(match.AwayWin_Odd).toFixed(2)})
      </span>
      <span
        className={`mt-4 ${match.Status === "Finished" ? "text-green-600" : "text-orange-600"}`}
      >
        {match.Status === "Finished"
          ? overTime === "Fulltime"
            ? Number(match.AwayTeam_SecondHalfGoals)
            : Number(match.AwayTeam_FirstHalfGoals)
          : "-"}
      </span>
    </div>
  );
};

export default DetailAwayTeam;
