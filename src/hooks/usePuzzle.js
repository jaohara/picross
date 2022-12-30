import { useEffect, useState } from "react";
import usePalette from "./usePalette";

// this seems like a bad approach
const cellKeys = ["fill", "color"];

// TODO: temporary palette colors
const tempPalette = [
  "61afef",
  "c678dd",
  "e06c75",
  "d19a66",
  "98c379",
];

const usePuzzle = (puzzleString = undefined, height = 10, width = 10) => {
  const [ author, setAuthor ] = useState(getAuthorFromPuzzleString());
  const [ name, setName ] = useState(getNameFromPuzzleString());
  const palette = usePalette(tempPalette); 
  const [ grid, setGrid ] = useState(createPuzzle(puzzleString));


  // TODO: Flesh out puzzle building fix return logic afterwards
  function createPuzzle (puzzleString) {
    // default case -> empty puzzle
    // if (puzzleString === undefined) {
    if (true) {
      return Array.from(Array(width).keys(), x => 
        Array.from(Array(height).keys(), y => ({
          // whether or not the cell is filled
          fill: false,
          // fill: (x + y) % 2 === 1,
          // the index for the color in the palette array
          color: 0,
        })));
    }

    // logic for building a puzzle from an existing string goes here
  };

  // TODO: Figure out approach and implement
  function getAuthorFromPuzzleString () {
    return puzzleString !== undefined ? JSON.parse(puzzleString).a : "";
  }

  // TODO: Figure out approach and implement
  function getNameFromPuzzleString () {
    return "New Puzzle";
  }

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

  // TODO: Test this function
  // assumes newCell is a valid cell
  const editCell = (x, y, newCell) => {
    isValidCell(newCell) && setGrid(grid.map((row, rowIndex) => {
      if (rowIndex !== x) return row;
      row.map((cell, cellIndex) => {
        if (cellIndex !== y) return cell;
        return newCell;
      });
    }));
  };

  const getCell = (x, y) => {
    if (!(x < width && y < height && x > 0 && y > 0)) return null;
    return grid[x][y];
  };

  // TODO: Test this function too, which editCell depends on
  const isValidCell = (cell) => {
    return cell !== null && cell !== undefined && typeof cell === 'object' &&
      Object.keys(cell).includes(...cellKeys) && 
      Object.keys(cell).length === cellKeys.length;
  }

  // TODO: Test this function, which getAuthorFromPuzzleString depends on
  const puzzleJsonString = () => {
    return JSON.stringify({
      "a": author,
      "w": width,
      "h": height,
      "g": {...grid.map(row => row.map(cell => ({"f": cell.fill ? 1 : 0, "c": cell.color})))}
    });
  }

  return ({
    author: author,
    editAuthor: setAuthor,
    editCell: editCell,
    editName: setName,
    getCell: getCell,
    grid: grid,
    height: height,
    name: name,
    palette: palette,
    print: print,
    puzzleJsonString: puzzleJsonString,
    width: width,
  });
};

export default usePuzzle;