import { MdOutlineBorderClear } from "react-icons/md";

const CellPane = ({
  hoverCellCoords,
  puzzle,
  selectedCell,
  selectedCellCoords,
  setHoverCellCoords,
  setSelectedCellCoords,
}) => {
  // function getHoverString () {
  //   if 
  //   return hoverCellCoords !== undefined ? ` (${hoverCellCoords.x}, ${hoverCellCoords.y})`: " (-,-)";
  // }

  // TODO: Is this an ugly solution?
  const isValidCoordObject = (coords) => {
    if (coords === undefined || coords === null) return false;
    if (coords.x === undefined || coords.x === null) return false;
    if (coords.y === undefined || coords.y === null) return false;
    return true;
  };

  // TODO: Modify this as the cell object changes - is there a better way?
  const isValidCellObject = (cell) => {
    if (cell === undefined || cell === null) return false;
    if (cell.fill === undefined || cell.fill === null) return false;
    if (cell.color === undefined || cell.color === null) return false;
    return true;
  }

  const getHoverString = () => 
    isValidCoordObject(hoverCellCoords) ? ` (${hoverCellCoords.x}, ${hoverCellCoords.y})`: " (-,-)";

  const getSelectedString = () =>
    isValidCoordObject(selectedCellCoords) ? ` (${selectedCellCoords.x}, ${selectedCellCoords.y})`: " (-,-)";

  const getSelectedCellInfo = () => {
    const cellCheck = isValidCellObject(selectedCell);

    console.log(`cellCheck is: ${cellCheck}`);
    console.log(selectedCell);

    if (!(isValidCellObject(selectedCell))) return "";

    return (
      <div className="CellPane__SelectedCellInfoWrapper">
        <h1 className="CellPane__Header">
          Fill?: <span className="no-color">{selectedCell.fill ? " Yes" : "No"}</span>
        </h1>

        <h1 className="CellPane__Header">
          Color: <span className="no-color">{selectedCell.color}</span>
        </h1>
      </div>
    );
  }

  return ( 
    <div className="CellPane__Wrapper">
      <h1 className="CellPane__Header">
        <MdOutlineBorderClear />
        Cell:
      </h1>
      
      <h1 className="CellPane__Header">
        Hover: <span className="no-color cell-coords">{getHoverString()}</span>
      </h1>

      <div className="CellPane__SelectedCellCoordsWrapper">
        <h1 className="CellPane__Header">
          Selected: <span className="no-color cell-coords">{getSelectedString()}</span>
        </h1>
      </div>

      {getSelectedCellInfo()}
    </div>
  );
}
 
export default CellPane;