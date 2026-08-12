import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running]);

  const reset = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>

      <h2>{time} seconds</h2>

      <button onClick={() => setRunning(true)}>
        Start
      </button>

      <button onClick={() => setRunning(false)}>
        Stop
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;