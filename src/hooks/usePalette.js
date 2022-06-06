import { useState } from "react";

const usePalette = () => {
  const [ palette, setPalette] = useState([]);

  const hasColor = (color) => palette.contains(color);

  const addColor = (color) => {
    if (hasColor(color)) return false;
    setPalette([...palette, color]);
    return true;
  };

  const removeColor = (color) => {
    if (!hasColor(color)) return false;
    setPalette([...palette.filter(item => item !== color)]);
    return true;
  };

  const changeColor = (oldColor, newColor) => {
    if (!hasColor(oldColor)) return false;
    setPalette([...palette.map(item => item === oldColor ? newColor : item)]);
    return true;
  };

  return palette;
};

export default usePalette;
