import "./Button.scss";

import {
  BsFillFileEarmarkArrowDownFill, 
  BsFillFileEarmarkPlusFill,
  BsFillPuzzleFill,
} from "react-icons/bs";

import { IoMdColorPalette } from "react-icons/io";

import { VscClearAll } from "react-icons/vsc";

const icons = {
  "clear": (<VscClearAll />),
  "create": (<BsFillFileEarmarkPlusFill />),
  "download": (<BsFillFileEarmarkArrowDownFill />),
  "palette": (<IoMdColorPalette />),
  "puzzle": (<BsFillPuzzleFill />),
  "save": (<BsFillFileEarmarkArrowDownFill />),
}

const Button = ({
  color = undefined,
  className = "",
  onClick = () => {},
  icon = undefined,
  iconSide = "left",
  text = "Button",
}) => {
  const getClassNames = () => {
    let classNames = `Controls__Button ${className}`;
    if (iconSide === "right") classNames += "right-icon" 
    return classNames;
  };

  const getIcon = () => {
    if (icon !== undefined && Object.keys(icons).includes(icon)) {
      return icons[icon];
    }
  }

  return ( 
    <button 
      className={getClassNames()}
      onClick={onClick}
    >
      <span className="Button__Icon"> 
        {getIcon()}
      </span>
      <span className="Button__Text">
        {text}
      </span>
    </button>
  );
}
 
export default Button;