import React from "react";
import { useTimer } from "react-timer-hook";

function tempTime() {
  const tempTime = new Date();
  tempTime.setSeconds(tempTime.getSeconds() + 300);
  return tempTime;
}

const Timer = ({ expiryTimestamp = tempTime() }) => {
  const fakeData = {
    skillName: "Piano",
  };
  const { skillName } = fakeData;

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      autoStart: false,
      onExpire: () => console.warn("onExpire called"),
    });
  const [hasStarted, setHasStarted] = React.useState(false);

  React.useEffect(() => {
    if (minutes !== 5) {
      setHasStarted(true);
    } else {
      setHasStarted(false);
    }
  }, [minutes]);

  return (
    <div className="flex flex-col items-center py-40 bg-sky-300 text-white p-10 h-screen">
      <h2 className="text-5xl underline">Practice {skillName}</h2>
      <div className="my-20 text-7xl">
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div className="flex text-black text-2xl">
        {!hasStarted && (
          <button
            className="mx-2 bg-green-300 p-5 rounded-md hover:opacity-80"
            onClick={start}
          >
            Start
          </button>
        )}
        {isRunning && (
          <button
            className="mx-2 bg-red-300 p-5 rounded-md hover:opacity-80"
            onClick={pause}
          >
            Pause
          </button>
        )}
        {!isRunning && hasStarted && (
          <button
            className="mx-2 bg-green-300 p-5 rounded-md hover:opacity-80"
            onClick={resume}
          >
            Resume
          </button>
        )}
        {hasStarted && (
          <button
            className="mx-2 bg-blue-300 p-5 rounded-md hover:opacity-80"
            onClick={() => restart(tempTime(), false)}
          >
            Restart
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
