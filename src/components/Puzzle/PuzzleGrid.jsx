import "./PuzzleGrid.scss";

const guideLineColor = ""

const PuzzleGrid = ({puzzle}) => {
  const palette = puzzle?.palette;

  const getCell = (cell, ) => (
    <div 
      className={`PuzzleGrid__Cell ${cell.fill ? "filled" : "empty"}`}
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
        puzzle.grid.map(row => (
          <div className="PuzzleGrid__Row">
            {row.map(cell => (getCell(cell)))}
          </div>
        ))
      }
    </div>
  );
};
 
export default PuzzleGrid;