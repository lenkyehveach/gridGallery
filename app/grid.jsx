"use client";
import useGrid from "./useGrid";
import { useEffect } from "react";
import GridItem from "./gridItem";

const Grid = ({ w, h, minW, minH }) => {
  const { gridItems, placeItem, full, freeSpace, removeItem } = useGrid(w, h);

  useEffect(() => {
    if (full) return;
    const intervalId = setInterval(() => {
      placeItem(minW, minH);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [full, freeSpace]);

  return (
    <div
      className="grid h-[800px] w-[800px] border-solid border-2 border-indigo-600"
      style={{
        gridTemplateRows: `repeat(${h}, 1fr)`,
        gridTemplateColumns: `repeat(${w}, 1fr)`,
      }}
    >
      {gridItems.map((item) => {
        return <GridItem data={item} key={item.id} handleClick={removeItem} />;
      })}
    </div>
  );
};
export default Grid;
