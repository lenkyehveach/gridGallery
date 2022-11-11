"use client";

import { useEffect, useState } from "react";

import Grid from "./grid";

const GridController = () => {
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(5);
  const [minW, setMinW] = useState(2);
  const [minH, setMinH] = useState(2);
  const [start, setStart] = useState(false);

  useEffect(() => setStart(false), [width, height, minH, minW]);
  return (
    <div className="flex h-screen place-content-center">
      <div className="self-center">
        <div className="flex flex-row gap-10 w-48 border-2 border-black">
          <button
            className="w-6 border-4 border-red-500 text-center"
            onClick={() => setWidth((i) => i + 1)}
          >
            {" "}
            +
          </button>
          <h1>{`Width \n ${width} `}</h1>
          <button onClick={() => setWidth((i) => i - 1)}>-</button>
        </div>
        <div>
          <button onClick={() => setHeight((i) => i + 1)}>+</button>
          {height}
          <button onClick={() => setHeight((i) => i - 1)}>-</button>
        </div>

        <div>
          <button onClick={() => setMinW((i) => i + 1)}>+</button>
          {minW}
          <button onClick={() => setMinW((i) => i - 1)}>-</button>
        </div>
        <div>
          <button onClick={() => setMinH((i) => i + 1)}>+</button>
          {minH}
          <button onClick={() => setMinH((i) => i - 1)}>-</button>
        </div>
        <button onClick={() => setStart(() => true)}>start</button>
        <br />
        <button>stop</button>
      </div>

      {start && <Grid w={width} h={height} minW={minW} minH={minH} />}
    </div>
  );
};
export default GridController;
