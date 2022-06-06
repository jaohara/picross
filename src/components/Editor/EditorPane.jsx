import PuzzleGrid from "../Puzzle/PuzzleGrid";

import { BsFillPuzzleFill } from "react-icons/bs";

const EditorPane = ({puzzle}) => {
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
      />
    </div> 
  );
}
 
export default EditorPane;