import React from "react";

const ControlButtons: React.FC<{
  active: boolean;
  isPaused: boolean;
  handleStart: (event: React.MouseEvent) => void;
  handlePauseResume: (event: React.MouseEvent) => void;
  handleReset: (event: React.MouseEvent) => void;
}> = (props) => {
  const StartButton = (
    <div className="btn btn-one btn-start" onClick={props.handleStart}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two" onClick={props.handleReset}>
        Reset
      </div>
      <div className="btn btn-one" onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );

  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
};
export default ControlButtons;
