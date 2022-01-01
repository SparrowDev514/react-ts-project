import { useState } from "react";
import React from "react";
import "./App.css";
import Todo from "./pages/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <React.StrictMode>
        <Todo />
      </React.StrictMode>
    </div>
  );
}

export default App;
