import { useState } from "react";
import TextInput from "../Misc/Controls/TextInput";
import PaletteInput from "./Palette/PaletteInput";

import { IoMdColorPalette } from "react-icons/io"

const PalettePane = ({palette, editable = true}) => {
  const [ newColor, setNewColor ] = useState("")

  const getNameView = () => {
    return (
      <TextInput
        disabled={!editable}
        setValue={palette.setName}
        value={palette.name}
      />);
  }

  const getPaletteInputs = () => (
    <div className="PalettePane__PaletteInputs">
      {palette.colors.map((color, index) => (
        <PaletteInput
          color={color}
          colorIndex={index}
          key={`PaletteInput_${index}`}
          name={`PaletteInput_${index}`}
          noLable={true}
          onChange={(e) => palette.changeColor(color, e.target.value)}
          value={color}
        />
      ))}
      <PaletteInput 
        colorIndex={palette.colors.length}
        onChange={(e) => setNewColor(e.target.value)}
        value={newColor}
      />
    </div>
  );

  return ( 
    <div className="PalettePane__Wrapper">
      <div className="PalettePane__PaletteName">
        <h1 className="PalettePane__Header"><IoMdColorPalette />Palette:</h1>
        {getNameView()}
        {getPaletteInputs()}
      </div>
    </div>
   );
}
 
export default PalettePane;