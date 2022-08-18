import React, { useState, useContext, useEffect, useRef } from "react";

const Timer: React.FC = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const time_ref = useRef(0);

  useEffect(() => {
    time_ref.current = window.setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
        if (seconds === 59 && minutes === 59) {
          setHours(hours + 1);
          setMinutes(0);
          setSeconds(0);
        }
      }
    }, 1000);
    return () => clearInterval(time_ref.current);
  });
  const stop = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    stop();
  };

  return (
    <div>
      <span>
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </span>
      <div>
        <button>시작</button>
        <button>일시정지</button>
        <button onClick={stop}>정지</button>
      </div>
    </div>
  );
};

export default Timer;
