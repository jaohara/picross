import CellPane from "./CellPane";
import EditorControls from "./EditorControls";
import EditorPane from "./EditorPane";
import PalettePane from "./PalettePane";

const Editor = ({}) => {
  return (
    <div className="Editor__Wrapper">
      <EditorControls />
      <EditorPane />
      <CellPane />
      <PalettePane />
      
    </div>
  );
};

export default Editor;