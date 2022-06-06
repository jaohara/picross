import { useState } from "react";

const usePalette = (initialColors = []) => {
  const [ name, setName ] = useState("New Palette");
  const [ colors, setColors] = useState(initialColors);

  const hasColor = (color) => colors.includes(color);

  const addColor = (color) => {
    if (hasColor(color)) return false;
    setColors([...colors, color]);
    return true;
  };

  const removeColor = (color) => {
    if (!hasColor(color)) return false;
    setColors([...colors.filter(item => item !== color)]);
    return true;
  };

  const changeColor = (oldColor, newColor) => {
    if (!hasColor(oldColor)) return false;
    setColors([...colors.map(item => item === oldColor ? newColor : item)]);
    return true;
  };

  return {
    addColor: addColor,
    changeColor: changeColor,
    colors: colors,
    hasColor: hasColor,
    name: name,
    removeColor: removeColor,
    setName: setName,
  };
};

export default usePalette;
