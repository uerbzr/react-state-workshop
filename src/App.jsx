import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const [status, setStatus] = useState("");
  const [onCall, setOnCall] = useState(false);

  const updateDisplay = (phonenumber) => {
    setDisplay((display) => display + phonenumber);
  };

  const callDisplay = () => {
    setOnCall((onCall) => true);
    setStatus((status) => "ON A CALL");
  };
  const cancelDisplay = () => {
    setStatus("");
    setOnCall(false);
    setDisplay("");
  };

  return (
    <>
      <div className="app">
        <h1 className={onCall ? "oncall" : ""}>niPhone</h1>
        <span className={onCall ? "oncall" : ""}>{display}</span>
        <span className={onCall ? "oncall message" : "message"}>{status}</span>
        <div>
          <button disabled={onCall} onClick={() => updateDisplay(1)}>
            1
          </button>
          <button disabled={onCall} onClick={() => updateDisplay(2)}>
            2
          </button>
          <button disabled={onCall} onClick={() => updateDisplay(3)}>
            3
          </button>
          <br />
          <button disabled={onCall} onClick={() => updateDisplay(4)}>
            4
          </button>
          <button disabled={onCall} onClick={() => updateDisplay(5)}>
            5
          </button>
          <button disabled={onCall} onClick={() => updateDisplay(6)}>
            6
          </button>
          <br />
          <button disabled={onCall} onClick={() => updateDisplay(7)}>
            7
          </button>
          <button disabled={onCall} onClick={() => updateDisplay(8)}>
            8
          </button>
          <button disabled={onCall} onClick={() => updateDisplay(9)}>
            9
          </button>
          <br />
          <button disabled={onCall} onClick={() => updateDisplay(0)}>
            0
          </button>
          <br />
          <button disabled={onCall} onClick={() => callDisplay()}>
            Call
          </button>
          <button onClick={() => cancelDisplay()}>End</button>
          <br />
          <button onClick={() => cancelDisplay()}>Clear</button>
          <br />
        </div>
        <br />
        <br />
        <br />
        <span className="motto">
          made in Bournemouth
          <br />
          the california of england
        </span>
      </div>
    </>
  );
}

export default App;
