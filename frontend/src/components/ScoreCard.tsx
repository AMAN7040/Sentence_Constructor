import React from "react";
import { Question } from "../types/question";

interface ScoreCardProps {
  question: Question;
  index: number;
  userAnswer: string[];
}

const buildSentenceWithWords = (template: string, words: string[]) => {
  const parts = template.split("_____________");
  return parts
    .reduce((acc, part, index) => {
      return acc + part + (words[index] ?? "");
    }, "")
    .trim();
};

const ScoreCard: React.FC<ScoreCardProps> = ({
  question,
  index,
  userAnswer,
}) => {
  const correctAnswer = question?.correctAnswer || [];
  const isAnswered = userAnswer.length > 0;

  const isCorrect =
    isAnswered &&
    userAnswer.length === correctAnswer.length &&
    userAnswer.every((word, idx) => word === correctAnswer[idx]);

  const getStatus = () => {
    if (!isAnswered)
      return {
        label: "Not Answered",
        color: "text-yellow-400",
        bg: "text-yellow-200",
        shadow: "shadow-[7px_-5px_100px_-49px_#fbbf24]",
      };

    return isCorrect
      ? {
          label: "Correct",
          color: "text-green-400",
          bg: "#EEFBEF",
          shadow: "shadow-[7px_-5px_100px_-49px_rgba(34,_197,_94,_0.5)]",
        }
      : {
          label: "Wrong",
          color: "text-red-400",
          bg: "#FCEBEC",
          shadow: "shadow-[0px_6px_100px_-49px_#e81b00]",
        };
  };

  const { label, color, bg, shadow } = getStatus();

  const sentence = question?.question;

  const correctSentece = buildSentenceWithWords(sentence, correctAnswer);
  const userSentence = isAnswered
    ? buildSentenceWithWords(sentence, userAnswer)
    : "Not Answered";

  return (
    <section
      className={`w-[clamp(350px,60vw,800px)] h-[clamp(250px,35vw,350px)]  ${shadow}  `}
    >
      <div className="bg-[#FFFFFF] h-1/2 gap-y-2">
        <div className="flex justify-between p-2 md:p-4">
          <div className="bg-[#F0F0F0] text-black font-body font-medium text-[clamp(10px,1.2vw,14px)] rounded-lg p-1">
            Prompt
          </div>
          <div className="font-body font-medium text-[clamp(10px,1.2vw,14px)]">
            {index + 1}
            <span className="text-neutral5">/10</span>
          </div>
        </div>
        <div className="p-3 md:p-5 text-[#414343]">
          <p className="font-body font-medium text-[clamp(12px,1.5vw,16px)]">
            {correctSentece}
          </p>
        </div>
      </div>
      <div className="h-1/2 border border-[#ebf2f2ce] bg-[#F6F9F9] p-2">
        <div className="flex gap-x-3 md:gap-x-5 items-center">
          <div className=" text-[#616464] font-body font-medium text-[clamp(11px,1.3vw,15px)] py-4 px-3 md:px-5">
            Your Response
          </div>
          <p
            className={`${color} bg-[${bg}] text-[clamp(10px,1.2vw,14px)] font-medium font-body rounded-md `}
          >
            {label}
          </p>
        </div>
        <div>
          <p className="font-body text-neutral8 font-normal text-[clamp(14px,2vw,18px)] p-3 md:p-5">
            {userSentence}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScoreCard;
