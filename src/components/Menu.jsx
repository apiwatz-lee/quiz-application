import React from "react";
import { useContext } from "react";
import { DataContext } from "../App";

const Menu = () => {
  const { appState, setAppState } = useContext(DataContext);

  return (
    <div className="w-[500px] h-[500px] bg-blue-100 rounded-lg flex flex-col justify-center items-center">
      <h1 className="text-4xl font-medium mb-6">Menu Component</h1>
      <button
        onClick={() => setAppState("quiz")}
        className=" bg-slate-300 rounded-md p-1 w-[300px] h-[50px] border-none cursor-pointer font-medium hover:bg-orange-400 hover:text-white"
      >
        Start QUIZ
      </button>
    </div>
  );
};

export default Menu;
