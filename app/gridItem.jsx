"use client";

const GridItem = ({ data, k }) => {
  function generateColor() {
    const hexArray = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += hexArray[Math.floor(Math.random() * 16)];
    }
    return `#${code}`;
  }

  const color = generateColor();

  return (
    <div
      key={k}
      style={{
        gridRowStart: data.y + 1,
        gridRowEnd: data.y + 1 + data.h,
        gridColumnStart: data.x + 1,
        gridColumnEnd: data.x + 1 + data.w,
        background: color,
      }}
    ></div>
  );
};

export default GridItem;
