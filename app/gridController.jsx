"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Grid from "./grid";
import StateButton from "./stateButton";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const GridController = () => {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [minW, setMinW] = useState(2);
  const [minH, setMinH] = useState(2);
  const [start, setStart] = useState(false);

  useEffect(() => setStart(false), [width, height, minH, minW]);
  return (
    <div className="flex flex-col gap-6 h-screen place-content-center overflow-hidden">
      <AnimatePresence mode="wait">
        {!start && (
          <motion.div
            className="self-center w-screen h-tall flex flex-col place-content-center gap-4"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <StateButton
              up={() => setWidth((i) => i + 1)}
              down={() => setWidth((i) => i - 1)}
            >
              <h1 className="self-center text-center">
                <span className="font-bold">Width</span> <br />
                {width}
              </h1>
            </StateButton>
            <StateButton
              up={() => setHeight((i) => i + 1)}
              down={() => setHeight((i) => i - 1)}
            >
              <h1 className="self-center text-center">
                <span className="font-bold">Height</span> <br />
                {height}
              </h1>
            </StateButton>
            <StateButton
              up={() => setMinW((i) => i + 1)}
              down={() => setMinW((i) => i - 1)}
            >
              <h1 className="self-center text-center">
                <span className="font-bold">minW</span> <br />
                {minW}
              </h1>
            </StateButton>
            <StateButton
              up={() => setMinH((i) => i + 1)}
              down={() => setMinH((i) => i - 1)}
            >
              <h1 className="self-center text-center">
                <span className="font-bold">minH</span> <br />
                {minH}
              </h1>
            </StateButton>
            <button
              className="w-48 h-12 self-center text-center font-bold md:text-3xl bg-slate-200 hover:bg-green-300 shadow-sm shadow-slate-800"
              onClick={() => setStart(() => true)}
            >
              Start
            </button>
          </motion.div>
        )}

        {start && (
          <>
            <Grid w={width} h={height} minW={minW} minH={minH} />
            <button
              className="w-48 h-12 self-center text-center font-bold md:text-3xl  bg-slate-200 hover:bg-green-300 shadow-sm shadow-slate-800"
              onClick={() => setStart(() => false)}
            >
              Reset
            </button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
export default GridController;
