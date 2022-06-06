import "./Editor.scss";

import CellPane from "./CellPane";
import EditorControls from "./EditorControls";
import EditorPane from "./EditorPane";
import OutputPane from "./OutputPane";
import PalettePane from "./PalettePane";

import usePuzzle from "../../hooks/usePuzzle";

const Editor = ({}) => {
  const puzzle = usePuzzle();

  return (
    <div className="Editor__Wrapper">
      <EditorControls 
        puzzle={puzzle}
      />

      <div className="Editor__MainGroup">
        <EditorPane
          puzzle={puzzle}
        />
        <CellPane />
        <PalettePane 
          palette={puzzle.palette}
        />
      </div>

      <OutputPane 
        puzzle={puzzle}
      />
    </div>
  );
};

export default Editor;