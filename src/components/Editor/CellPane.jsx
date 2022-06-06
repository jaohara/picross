import { MdOutlineBorderClear } from "react-icons/md";

const CellPane = ({}) => {
  return ( 
    <div className="CellPane__Wrapper">
      <h1 className="CellPane__Header">
        <MdOutlineBorderClear />
        Cell:
      </h1>
      Hey, I'm the Cell Pane!
    </div>
  );
}
 
export default CellPane;