import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval: number | undefined;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-semibold pb-2">01-Stopwatch</h1>
        <div className="text-xl font-medium py-4">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}:</span>
        </div>
        <div className="flex flex-row gap-8 text-base">
          {running ? (
            <button
              className="border rounded-xl border-sky-300 py-1 px-3 bg-sky-50"
              onClick={() => {
                setRunning(false);
              }}
            >
              Stop
            </button>
          ) : (
            <button
              className="border rounded-xl border-sky-300 py-1 px-3 bg-sky-50"
              onClick={() => {
                setRunning(true);
              }}
            >
              Start
            </button>
          )}

          <button
            className="border rounded-xl border-sky-300 py-1 px-3 bg-sky-50"
            onClick={() => {
              setTime(0);
              setRunning(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
