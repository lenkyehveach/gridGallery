import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useGrid(width, height) {
  const [grid, setGrid] = useState(
    Array(height)
      .fill("")
      .map(() => Array(width).fill(0))
  );

  const [gridItems, setGridItems] = useState([]);

  const area = height * width;
  const [freeSpace, setFreeSpace] = useState(area);

  const [full, setFull] = useState(false);
  // const [attempts, setAttempts] = useState(0);

  function makeItem(x, y, w, h) {
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
    return { id: uuidv4(), x: x, y: y, w: w, h: h, color: generateColor() };
  }
  function getNextSize(minW, minH) {
    let free = freeSpace / area;

    let w = 0;
    let h = 0;

    if (free <= 0.4) {
      w = minW;
      h = minH;
      return { w, h };
    }

    w = Math.floor(
      Math.random() * (Math.round((2 / 3) * free * width) - minW + 1) + minW
    );
    h = Math.floor(
      Math.random() * (Math.round((2 / 3) * free * height) - minH + 1) + minH
    );

    return { w, h };
  }
  function getNextCoordsRange(w, h) {
    let poss = [];
    for (let i = 0; i < height - h + 1; i++) {
      for (let j = 0; j < width - w + 1; j++) {
        let block = grid.slice(i, i + h);

        block = block.map((row) => row.slice(j, j + w));
        block = [].concat(...block);

        // console.log(block);
        let free = true;

        if (block.includes(1)) {
          free = false;
        }
        if (free) {
          poss.push([j, i]);
        }
      }
    }
    // poss.sort((a, b) => a[0] - b[0]);
    return poss;
  }
  function removeArea(A, x, y, w, h, fillval) {
    let b = [...A];
    for (let i = y; i < y + h; i++) {
      for (let j = x; j < x + w; j++) {
        b[i][j] = fillval;
      }
    }
    return b;
  }
  function placeItem(minW, minH) {
    let { w, h } = getNextSize(minW, minH);

    let possibilities = getNextCoordsRange(w, h);
    if (possibilities.length === 0) {
      setFull(() => true);
      return;
    }
    let rn = Math.floor(Math.random() * possibilities.length);
    let [x, y] = possibilities[rn];

    let newItem = makeItem(x, y, w, h);

    setGrid(() => removeArea(grid, x, y, w, h, 1));

    // gridItems.push(GalleryItem(x, y, w, h));
    setGridItems((gridItems) => [...gridItems, newItem]);

    setFreeSpace((f) => f - w * h);
    // setAttempts(() => 0);
  }

  function removeItem(id, x, y, w, h) {
    setGridItems(() => gridItems.filter((item) => item.id != id));
    setFreeSpace((f) => f + w * h);
    setGrid(() => removeArea(grid, x, y, w, h));
    setFull(() => false);
  }

  return { gridItems, placeItem, full, freeSpace, removeItem };
}
