import { useState } from "react";
import "./Editor.scss";

import CellPane from "./CellPane";
import EditorControls from "./EditorControls";
import EditorPane from "./EditorPane";
import OutputPane from "./OutputPane";
import PalettePane from "./PalettePane";

import usePuzzle from "../../hooks/usePuzzle";

const Editor = ({}) => {
  const puzzle = usePuzzle();
  const [ hoverCellCoords, setHoverCellCoords ] = useState({});
  const [ selectedCell, setSelectedCell ] = useState(null);
  const [ selectedCellCoords, setSelectedCellCoords ] = useState({}); 

  const paneCommonProps = {
    hoverCellCoords: hoverCellCoords,
    puzzle: puzzle,
    setHoverCellCoords: setHoverCellCoords,
    selectedCell: selectedCell,
    setSelectedCell: setSelectedCell,
    selectedCellCoords: selectedCellCoords,
    setSelectedCellCoords: setSelectedCellCoords,
  };

  return (
    <div className="Editor__Wrapper">
      <EditorControls 
        puzzle={puzzle}
      />

      <div className="Editor__MainGroup">
        <EditorPane
          {...paneCommonProps}
        />
        <CellPane 
          {...paneCommonProps}       
        />
        <PalettePane 
          palette={puzzle.palette}
          {...paneCommonProps}
        />
      </div>

      <OutputPane 
        {...paneCommonProps}
      />
    </div>
  );
};

export default Editor;