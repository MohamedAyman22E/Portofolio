import React, { useEffect, useRef } from "react";
import q1 from "../assets/audio/نغمة  صلي على محمد ﷺ.mp3";

const MyProphet = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playSound = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };
    const intervalId = setInterval(playSound, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={q1} />
    </div>
  );
};
export default MyProphet;
