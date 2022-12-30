import PuzzleGrid from "../Puzzle/PuzzleGrid";

import { BsFillPuzzleFill } from "react-icons/bs";

const EditorPane = ({
  hoverCellCoords,
  puzzle,
  selectedCell,
  selectedCellCoords,
  setHoverCellCoords,
  setSelectedCell,
  setSelectedCellCoords,
}) => {
  return ( 
    <div className="EditorPane__Wrapper">
      <div className="EditorPane__Header">
        <h1>
          <BsFillPuzzleFill />
          Puzzle:
        </h1>
      </div>
      <div className="EditorPane__Controls">

      </div>
      <PuzzleGrid 
        puzzle={puzzle}
        hoverCellCoords={hoverCellCoords}
        selectedCell={selectedCell}
        setSelectedCell={setSelectedCell}
        setHoverCellCoords={setHoverCellCoords}
        selectedCellCoords={selectedCellCoords}
        setSelectedCellCoords={setSelectedCellCoords}
      />
    </div> 
  );
}
 
export default EditorPane;