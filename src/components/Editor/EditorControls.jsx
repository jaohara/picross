import Button from "../Misc/Controls/Button";
import TextInput from "../Misc/Controls/TextInput";

import { BsFillPuzzleFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";

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
      <BsFillPuzzleFill />
      <TextInput 
        noLabel={true}
        onChange={(e) => {puzzle.editName(e.target.value)}}
        value={puzzle.name}
        setValue={puzzle.editName}
      />

      <FaUserEdit />
      <TextInput
        noLabel={true}
        onChange={(e) => {puzzle.editAuthor(e.target.value)}}
        value={puzzle.author}
        setValue={puzzle.editAuthor}
      />
      {getButtons()}
    </div>
  );
}
 
export default EditorControls;