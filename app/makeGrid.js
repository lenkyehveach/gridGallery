class Grid {
  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.area = w * h;
    this.freeSpace = this.area;
    this.gridItems = [];
    this.full = false;
    this.attempts = 0;
    this.grid = new Array(h).fill(new Array(w).fill(0));
  }

  getNextSize(freeSpace, total, minW, minH, gridW, gridH) {
    let free = freeSpace / total;
    let w = 0;
    let h = 0;

    if (free <= 0.3) {
      w = minW;
      h = minH;
      return [w, h];
    }

    w = Math.floor(
      Math.random() * (Math.round((2 / 3) * free * gridW) - minW + 1) + minW
    );
    h = Math.floor(
      Math.random() * (Math.round((2 / 3) * free * gridH) - minH + 1) + minH
    );

    return [w, h];
  }

  getNextCoordsRange(w, h) {
    let poss = [];
    for (let i = 0; i < this.height - h + 1; i++) {
      for (let j = 0; j < this.width - w + 1; j++) {
        let block = this.grid.slice(i, i + h);

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
    poss.sort((a, b) => a[0] - b[0]);
    return poss;
  }

  removeArea(A, x, y, w, h) {
    function nestedCopy(array) {
      return JSON.parse(JSON.stringify(array));
    }
    let b = nestedCopy(A);
    b.map((row, ind, arr) => {
      let c = nestedCopy(row);
      c.splice(x, w, ...Array(w).fill(1));
      if ((ind >= y) & (ind < y + h)) {
        arr[ind] = c;
      }
    });

    return b;
  }

  placeItem() {
    function makeItem(x, y, w, h) {
      return { x: x, y: y, w: w, h: h };
    }
    let [w, h] = this.getNextSize(
      this.freeSpace,
      this.area,
      4,
      4,
      this.width,
      this.height
    );
    // console.log("proposed: ", w, " ", h);
    let possibilities = this.getNextCoordsRange(w, h);
    // console.log(possibilities);
    let l = possibilities.length;

    if (possibilities.length === 0) {
      if (this.attempts === 20) {
        this.full = true;
        return;
      }

      this.attempts = this.attempts + 1;
      this.placeItem();
    } else {
      let rn = Math.floor(Math.random() * l);

      let [x, y] = possibilities[rn];

      let newItem = makeItem(x, y, w, h);
      let gc = this.grid;

      this.grid = this.removeArea(gc, x, y, w, h);

      // gridItems.push(GalleryItem(x, y, w, h));
      this.gridItems.push(newItem);

      this.freeSpace = this.freeSpace - w * h;
    }
  }

  populateGrid() {
    while (!this.full) {
      this.placeItem();
    }
  }
}

export default Grid;
