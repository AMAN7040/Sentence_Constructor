import React, { useEffect, useState } from "react";

interface QuestionTimerProps {
  duration: number;
  onTimeUp: () => void;
  questionId: string;
}

const QuestionTimer: React.FC<QuestionTimerProps> = ({
  duration,
  onTimeUp,
  questionId,
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration, questionId]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  return (
    <div
      className={`text-[18px] md:text-2xl font-semibold text-neutral8 mb-4 ${
        timeLeft < 11 ? "text-red-700" : ""
      }`}
    >
      0:{timeLeft.toString().padStart(2, "0")}
    </div>
  );
};

export default QuestionTimer;
