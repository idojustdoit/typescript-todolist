import React, { useState, useRef } from "react";

import Timer from "./Timer";
import ControlButtons from "./ControlButtons";

function StopWatch() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const Timer_ref = useRef(0);

  React.useEffect(() => {
    if (isActive && isPaused === false) {
      Timer_ref.current = window.setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(Timer_ref.current);
    }
    return () => {
      clearInterval(Timer_ref.current);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="stop-watch">
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
  );
}

export default StopWatch;
