import React, { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";

const Score = () => {
  const { score, setAppState, setScore } = useContext(DataContext);

  const reExam = () => {
    setAppState("menu");
    setScore(0);
  };
  return (
    <div className="w-[500px] h-[500px] bg-blue-100 rounded-lg flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold">Score Summary</h1>
      <h2 className="text-2xl font-bold mt-10">
        {score} / {QuestionsData.length}
      </h2>
      <button
        className="mt-10 p-2 bg-orange-400 rounded-md w-[300px] h-[50px] border-none cursor-pointer font-medium hover:bg-gray-700 hover:text-white"
        onClick={reExam}
      >
        Re-exam
      </button>
    </div>
  );
};

export default Score;
