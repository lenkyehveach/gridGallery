"use client";
import useGrid from "./useGrid";
import { useEffect } from "react";
import GridItem from "./gridItem";
import GridMask from "./gridMask";
import { motion, AnimatePresence } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

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
    <motion.div
      className="self-center border-4 border-slate-800 bg-slate-800 grid gap-1 w-screen h-100vw lg:h-[800px] lg:w-[800px] "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      style={{
        gridTemplateRows: `repeat(${h}, 1fr)`,
        gridTemplateColumns: `repeat(${w}, 1fr)`,
      }}
    >
      <GridMask w={w} h={h} />
      <AnimatePresence>
        {gridItems.map((item) => {
          return (
            <GridItem data={item} key={item.id} handleClick={removeItem} />
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};
export default Grid;
