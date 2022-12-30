import "./PuzzleGrid.scss";

const guideLineColor = ""

const PuzzleGrid = ({
  hoverCellCoords,
  puzzle,
  selectedCell,
  setSelectedCell,
  selectedCellCoords,
  setHoverCellCoords,
  setSelectedCellCoords,
}) => {
  const palette = puzzle?.palette;

  const getCell = (cell, x, y) => (
    <div 
      className={`PuzzleGrid__Cell ${cell.fill ? "filled" : "empty"}`}
      onMouseEnter={(e) => {
        console.log(`x: ${x}, y: ${y}`);
        setHoverCellCoords({
          x: x,
          y: y,
        });
        console.log(hoverCellCoords);
      }}
      onClick={(e) => {
        console.log(`x: ${x}, y: ${y}`);
        setSelectedCellCoords({
          x: x,
          y: y,
        });
        setSelectedCell(puzzle.getCell(x, y));
        console.log(selectedCellCoords);
      }}
      style={{
        "paddingBottom": `${100/puzzle.width}%`,
        "width": `${100/puzzle.width}%`
      }}
    >
    </div>
  );

  // I don't think this is the best way to do it
  const getGuidelineStyle = () => {
    return ``;
  };

  return ( 
    <div className="PuzzleGrid__Wrapper">
      {
        puzzle.grid.map((row, rowIndex) => (
          <div className="PuzzleGrid__Row">
            {row.map((cell, cellIndex) => (getCell(cell, cellIndex, rowIndex)))}
          </div>
        ))
      }
    </div>
  );
};
 
export default PuzzleGrid;