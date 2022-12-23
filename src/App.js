import { useEffect, useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  let [count, setCount] = useState(0);
  let [stateCounter, setStateCounter] = useState("stop");
  let [intervalObj, setIntervalObj] = useState(null);
  useEffect(() => {
    switch (stateCounter) {
      case "start":
        setIntervalObj(
          setInterval(() => {
            setCount(count++);
          }, 1000)
        );

        break;
      case "stop":
        clearInterval(intervalObj);
        setIntervalObj(null);
        break;
      case "reset":
        clearInterval(intervalObj);
        setIntervalObj(null);
        setCount(0);
        break;

      default:
        break;
    }
  }, [stateCounter]);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setStateCounter("start")}
      >
        Start
      </button>

      <button
        type="button"
        className="btn btn-light"
        onClick={() => setStateCounter("reset")}
      >
        Reset
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setStateCounter("stop")}
      >
        Stop
      </button>
    </div>
  );
}
