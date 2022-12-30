
import { useState } from "react";
import Button from "../Misc/Controls/Button";

const promptChar = ">"

const OutputPane = ({puzzle}) => {
  const [ logBody, setLogBody ] = useState(initialLog());

  function initialLog() {
    return [logPrompt()];
  }

  const controlButtons = [
    {
      icon: "puzzle",
      onClick: ()=>{logPuzzleString()},
      text: "Log Puzzle String"
    },
    {
      icon: "palette",
      onClick: ()=>{logPalette()},
      text: "Log Palette"
    }, 
    {
      icon: "clear",
      onClick: ()=>{clearLog()},
      text: "Clear",
    },
  ];

  function logPrompt() {
    return (<p className="prompt">{promptChar}</p>);
  }

  // TODO: make this a hook?
  const getButtons = () => controlButtons.map(control => (<Button {...control} />));

  const parseOutputColors = () => {
    /*
      We're going to want to match this pattern:

        c":_}

      ...with the "_" being the palette number.
    */
  };

  const log = (output) => {
    setLogBody([
      ...(logBody.slice(0, logBody.length - 1)), 
      (<p>{output}</p>),
      logPrompt(),
    ]);
    scrollLogToBottom();
  };

  function clearLog() {
    setLogBody(initialLog);
  }
    
  // TODO: Parse colors from string
  function logPuzzleString() {
    console.log(typeof logBody)
    console.log(logBody);
    log(puzzle.puzzleJsonString());
  }

  function logPalette() {
    log(puzzle.palette.colors.map(color => (
      <span>{color}<br /></span>
    )));
  }

  function scrollLogToBottom() {
    const outputPane = document.getElementById("OutputPane__Content");
    // TODO: Fix output scrolling - this is broken
    outputPane.scrollTop = outputPane.scrollHeight;
  }

  return ( 
    <div className="OutputPane__Wrapper">
      <div className="OutputPane__Controls">
        {getButtons()}
      </div>
      <div className="OutputPane__Content" id="OutputPane__Content">
        {/* <p>{puzzle.puzzleJsonString()}</p> */}
        {logBody}
      </div>
    </div>
  );
}
 
export default OutputPane;