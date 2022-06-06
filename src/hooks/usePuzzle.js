import { useState } from "react";
import usePalette from "./usePalette";

const usePuzzle = (height = 10, width = 10) => {
  const palette = usePalette(); 
  const [ grid, setGrid ] = useState(
    Array.from(Array(width).keys(), x => 
      Array.from(Array(height).keys(), y => ({
        // whether or not the cell is filled
        fill: false,
        // the index for the color in the palette array
        color: 0,
      }))));

  const print = () => {
    const filledItem = "X";
    const emptyItem = " ";
    let output = "";

    grid.forEach(x => {
      x.forEach(y => output += `[ ${y.fill ? filledItem : emptyItem} ]`);
      output += "<br />";
    });

    return output;
  };

  return ({
    grid: grid,
    palette: palette,
    print: print,
  });
};

export default usePuzzle;