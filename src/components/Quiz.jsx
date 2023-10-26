import React, { useContext, useEffect, useState } from "react";
import QuestionsData from "../data/QuestionsData";
import { DataContext } from "../App";
import Button from "./Button";

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const { score, setScore, setAppState } = useContext(DataContext);

  useEffect(() => {
    checkAnswer();
  }, [answer]);

  const checkAnswer = () => {
    if (answer !== "") {
      if (answer === QuestionsData[currentStep].answer) {
        setScore(score + 1);
        nextQuestion();
      } else {
        nextQuestion();
      }
    }
  };

  const nextQuestion = () => {
    if (currentStep === QuestionsData.length - 1) {
      // 4 = 4 ให้ไปสรุปคะแนน
      setAppState("score");
    } else {
      setAnswer(""); //ไปข้อถัดไปแล้วให้ clear state answer เพราะว่า ถ้าข้อต่อไปเราตอบข้อเดิม useEffect จะไม่ทำงานเพราะ state ไม่ได้เปลี่ยน
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="w-[500px] h-[500px] bg-blue-100 rounded-lg flex flex-col justify-center items-center">
      <h1 className="text-4xl font-medium mb-6">
        {QuestionsData[currentStep].question}
      </h1>
      <div className="flex flex-col mt-6">
        <Button onClick={() => setAnswer("A")}>
          {QuestionsData[currentStep].A}
        </Button>
        <Button onClick={() => setAnswer("B")}>
          {QuestionsData[currentStep].B}
        </Button>
        <Button onClick={() => setAnswer("C")}>
          {QuestionsData[currentStep].C}
        </Button>
        <Button onClick={() => setAnswer("D")}>
          {QuestionsData[currentStep].D}
        </Button>
      </div>
      <p>{`${currentStep + 1} / ${QuestionsData.length}`}</p>
    </div>
  );
};

export default Quiz;
