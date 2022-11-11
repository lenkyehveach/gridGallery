const GridMask = ({ w, h }) => {
  let squares = [];
  let counter = 0;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      counter = counter + 1;
      squares.push({ x: j, y: i, id: counter });
    }
  }
  return (
    <>
      {squares.map((sq) => {
        return (
          <div
            className="bg-white z-10"
            key={sq.id}
            style={{
              gridRowStart: sq.y + 1,
              gridRowEnd: sq.y + 1 + 1,
              gridColumnStart: sq.x + 1,
              gridColumnEnd: sq.x + 1 + 1,
            }}
          ></div>
        );
      })}
    </>
  );
};

export default GridMask;
