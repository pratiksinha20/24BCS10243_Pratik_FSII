import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px",
        color: "black",
      }}
    >
      <h1>Background Changer</h1>

      <button onClick={() => setColor("red")}>
        Red
      </button>

      <button onClick={() => setColor("blue")}>
        Blue
      </button>

      <button onClick={() => setColor("green")}>
        Green
      </button>

      <button onClick={() => setColor("yellow")}>
        Yellow
      </button>
    </div>
  );
}

export default App;