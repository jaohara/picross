import "./PaletteInput.scss";
import TextInput from "../../Misc/Controls/TextInput";

// TODO: Update so doesn't omit starting pound sign (#)
// Omits starting pound sign
const hexColorRegex = "^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";

const PaletteInput = ({
  color = "", 
  colorIndex,
  disabled = false, 
  name,
  onChange = (e) => {setColor(e.target.value)},
  setColor = () => {},
}) => {
  const isColorString = (colorString) => colorString.match(hexColorRegex) !== null;

  const getColorBackgroundIfValid = () => {
    if (!isColorString(color)) return {};
    // TODO: Revise after fixing regex
    // Appends hash sign
    return {style: {"backgroundColor": `#${color}`}};
  }

  return ( 
    <div className="PaletteInput__Wrapper">
      <div 
        className="PaletteInput__ColorIndex"
        {...getColorBackgroundIfValid()}
      >
        <label htmlFor={name}>
          {colorIndex}
        </label>
      </div>
      <TextInput 
        disabled={disabled}
        name={name}
        noLabel={true}
        onChange={onChange}
        value={color}
        setValue={setColor}
      />
    </div>
  );
}
 
export default PaletteInput;