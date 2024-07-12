const DetailDraw = ({ match }) => {
  return (
    <div className="flex w-[400px] flex-col items-center">
      <p className="flex w-max flex-col items-center text-center">
        Draw
        <span className="text-xs font-extralight text-yellow-600">
          ({Number(match.Draw_Odd).toFixed(2)})
        </span>
      </p>
    </div>
  );
};

export default DetailDraw;
