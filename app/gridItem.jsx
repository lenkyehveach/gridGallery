"use client";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const GridItem = ({ data, handleClick }) => {
  return (
    <motion.div
      onClick={() => handleClick(data.id, data.x, data.y, data.w, data.h)}
      className="z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      style={{
        gridRowStart: data.y + 1,
        gridRowEnd: data.y + 1 + data.h,
        gridColumnStart: data.x + 1,
        gridColumnEnd: data.x + 1 + data.w,
        background: data.color,
      }}
    ></motion.div>
  );
};

export default GridItem;
