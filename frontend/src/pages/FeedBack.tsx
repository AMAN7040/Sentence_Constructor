import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Question } from "../types/question";
import ScoreCircle from "../components/ScoreCircle";

const FeedBack: React.FC = () => {
  const { state } = useLocation();
  const { selectedWords, questions } = state || {};

  const score: number = Array.isArray(questions)
    ? questions.reduce((acc: number, question: Question): number => {
        const correctAnswer = question?.correctAnswer;
        const userAnswer = selectedWords[question.questionId] || [];

        const isCorrect =
          userAnswer.length === correctAnswer.length &&
          userAnswer.every((w: string, i: number) => w === correctAnswer[i]);

        return acc + (isCorrect ? 1 : 0);
      }, 0)
    : 0;

  return (
    <div className="min-h-screen flex flex-col items-center py-24">
      <div className="flex flex-col items-center gap-y-6 md:gap-y-14">
      <div className="flex flex-col items-center text-center gap-6">
        <div className="flex justify-center w-[clamp(200px,40vw,300px)]">
          <ScoreCircle score={score} total={questions.length} />
        </div>
        <p className="text-[clamp(14px,2vw,18px)] text-neutral8 w-[clamp(350px,60vw,800px)] px-4">
          While you correctly formed several sentences, there are a couple of
          areas where improvement is needed. Pay close attention to sentence
          structure and word placement to ensure clarity and correctness. Review
          your responses below for more details.
        </p>
      </div>
      <Link to={"/"}>
        <div className="border border-secondary rounded-[8px] w-30 h-10.5 flex justify-center items-center btn z-1 cursor-pointer transition-transform duration-100 ease-out  hover:scale-105">
          <p className="font-body font-medium text-[16px] text-secondary hover:text-white">
            Retry Quiz
          </p>
        </div>
      </Link>
      </div>
    </div>
  );
};

export default FeedBack;
