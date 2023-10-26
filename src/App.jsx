import { useState } from "react";
import "./App.css";

function App() {
  const [appState, setAppState] = useState("menu");

  return (
    <>
      <h1 className="text-3xl font-bold underline">Web Development Quiz</h1>
    </>
  );
}

export default App;
