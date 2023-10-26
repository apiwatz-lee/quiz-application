import React, { useState } from "react";
import QuestionsData from "../data/QuestionsData";

const Quiz = () => {
  console.log("QuestionsData", QuestionsData);

  const [currentStep, setCurrentStep] = useState(0);
  const [answer, setAnswer] = useState("");
  return (
    <div className="w-[500px] h-[500px] bg-blue-100 rounded-lg flex flex-col justify-center items-center">
      <h1 className="text-4xl font-medium mb-6">
        {QuestionsData[currentStep].question}
      </h1>
      <div className="flex flex-col mt-6">
        <button
          className=" mb-2 p-2 bg-orange-400 rounded-md w-[300px] h-[50px] border-none cursor-pointer font-medium hover:bg-gray-700 hover:text-white"
          onClick={() => setAnswer("A")}
        >
          {QuestionsData[currentStep].A}
        </button>
        <button
          className="mb-2 p-2 bg-orange-400 rounded-md w-[300px] h-[50px] border-none cursor-pointer font-medium hover:bg-gray-700 hover:text-white"
          onClick={() => setAnswer("B")}
        >
          {QuestionsData[currentStep].B}
        </button>
        <button
          className="mb-2 p-2 bg-orange-400 rounded-md w-[300px] h-[50px] border-none cursor-pointer font-medium hover:bg-gray-700 hover:text-white"
          onClick={() => setAnswer("C")}
        >
          {QuestionsData[currentStep].C}
        </button>
        <button
          className="mb-2 p-2 bg-orange-400 rounded-md w-[300px] h-[50px] border-none cursor-pointer font-medium hover:bg-gray-700 hover:text-white"
          onClick={() => setAnswer("D")}
        >
          {QuestionsData[currentStep].D}
        </button>
      </div>
      <p>{`${currentStep + 1} / ${QuestionsData.length}`}</p>
    </div>
  );
};

export default Quiz;
