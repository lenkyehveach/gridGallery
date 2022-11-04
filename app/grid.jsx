"use client";

import GridItem from "./gridItem";

const GridC = ({ items }) => {
  return (
    <div className="h-screen w-screen grid grid-rows-100 grid-cols-100">
      {items.map((item, i) => {
        return <GridItem data={item} key={i} k={i} />;
      })}
    </div>
  );
};

export default GridC;
