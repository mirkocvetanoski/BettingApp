const DetailMatchInfo = ({ match }) => {
  return (
    <>
      <span className="text-md font-thin underline underline-offset-4">
        Competition: {match.Competition}
      </span>

      <span className="text-md flex w-max items-center gap-2 font-thin underline underline-offset-4">
        <p>Playtime:</p>
        {match.Status === "Finished"
          ? "Finished"
          : match?.PlayTime?.slice(-8, -3)}
      </span>

      <span className="text-md font-thin underline underline-offset-4">
        Country: {match.Country}
      </span>

      <span className="text-md font-thin underline underline-offset-4">
        League: {match.League}
      </span>
    </>
  );
};

export default DetailMatchInfo;
