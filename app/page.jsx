import Grid from "./makeGrid";
import GridC from "./grid";

async function getGridItems() {
  let g = new Grid(100, 100);
  g.populateGrid();

  return g.gridItems;
}

export default async function Home() {
  let items = await getGridItems();

  console.log(Array.isArray(items));
  return <>{items && <GridC items={items} />}</>;
}
