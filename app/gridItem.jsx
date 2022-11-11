"use client";

const GridItem = ({ data, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(data.id, data.x, data.y, data.w, data.h)}
      style={{
        gridRowStart: data.y + 1,
        gridRowEnd: data.y + 1 + data.h,
        gridColumnStart: data.x + 1,
        gridColumnEnd: data.x + 1 + data.w,
        background: data.color,
      }}
    ></div>
  );
};

export default GridItem;
