import React, { useEffect, useState } from "react";

interface QuestionTimerProps {
  duration: number;
  onTimeUp: () => void;
  resetTrigger: number;
}

const QuestionTimer: React.FC<QuestionTimerProps> = ({
  duration,
  onTimeUp,
  resetTrigger,
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [resetTrigger]);

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
    <div className="text-[18px] md:text-2xl font-semibold text-neutral8 mb-4">
      0:{timeLeft}
    </div>
  );
};

export default QuestionTimer;
