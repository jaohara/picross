import Button from "../Misc/Controls/Button";
import TextInput from "../Misc/Controls/TextInput";

const controls = [
  {
    icon: "create",
    text: "New",
  },
  {
    icon: "save",
    text: "Save",
  }
];

const EditorControls = ({puzzle}) => {
  const getButtons = () => controls.map(control => (<Button {...control} />)); 
  
  return ( 
    <div className="EditorControls__Wrapper">
      <TextInput 
        noLabel={true}
        onChange={(e) => {puzzle.editName(e.target.value)}}
        value={puzzle.name}
        setValue={puzzle.editName}
      />
      {getButtons()}
    </div>
  );
}
 
export default EditorControls;