import _ from "lodash";

const Piano = () => {
  const rectanglesOnTheRight = [1, 2, 4, 5, 6, 8, 9, 11, 12, 13];
  const rectanglesOnTheLeft = [2, 3, 5, 6, 7, 9, 10, 12, 13, 14];
  return (
    <div className="ml-8 h-[200] w-fit bg-white border-2 border-black flex flex-row">
      {_.range(14).map((num: number) => (
        <div className="relative border-2 border-black w-[60]" key={num}>
          {_.includes(rectanglesOnTheRight, num + 1) && (
            <div className="absolute top-0 right-0 bg-black w-[20] h-[100]" />
          )}
          {_.includes(rectanglesOnTheLeft, num + 1) && (
            <div className="absolute top-0 left-0 bg-black w-[20] h-[100]" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Piano;
