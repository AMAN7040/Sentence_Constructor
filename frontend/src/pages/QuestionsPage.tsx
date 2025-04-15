import React, { useEffect, useState } from "react";
import { useQuestions } from "../hooks/useQuestions";
import WordOptions from "../components/WordOptions";
import SentenceCard from "../components/SentenceCard";
import QuestionTimer from "../components/QuestionTimer";
import ProgressTracker from "../components/ProgressTracker";

const QuestionsPage: React.FC = () => {
  const { data, loading, error } = useQuestions();
  const [selectedWords, setSelectedWords] = useState<Record<string, string[]>>(
    {}
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [timerResetKey, setTimerResetKey] = useState<number>(0);

  const questions = data?.questions || [];
  const currentQuestion = questions[currentIndex];
  const questionId = currentQuestion?.questionId;

  const handleSelectWord = (word: string, qid: string) => {
    setSelectedWords((prevState) => {
      const currentSelections = prevState[qid] || [];
      if (!currentSelections.includes(word)) {
        return {
          ...prevState,
          [qid]: [...currentSelections, word],
        };
      }
      return prevState;
    });
  };

  const handleDeselectWord = (index: number) => {
    if (!questionId) return;
    setSelectedWords((prev) => {
      const updated = [...(prev[questionId] || [])];
      updated.splice(index, 1);
      return { ...prev, [questionId]: updated };
    });
  };

  const isAnswerComplete =
    currentQuestion &&
    selectedWords[questionId]?.length === currentQuestion.correctAnswer.length;

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const usedWords = selectedWords[questionId] || [];
  const availableOptions = currentQuestion?.options.filter(
    (opt) => !usedWords.includes(opt)
  );

  const handleTimeUp = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setTimerResetKey((prev) => prev + 1);
    } else {
      console.log("Quiz completed by timeout");
    }
  };

  useEffect(() => {
    setTimerResetKey((prev) => prev + 1);
  }, [currentIndex]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading questions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No questions available.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F8F8] flex justify-center items-center min-w-screen min-h-screen">
      <div className="bg-white flex flex-col px-4 py-6 rounded-lg shadow-md w-[clamp(350px,70vw,975px)] h-[clamp(500px,70vw,650px)]">
        <div className="flex flex-col w-full my-0 sm:my-2 md:my-6">
          <QuestionTimer
            duration={30}
            onTimeUp={handleTimeUp}
            resetTrigger={timerResetKey}
          />
          <ProgressTracker
            currentStep={currentIndex + 1}
            totalSteps={questions.length}
          />
        </div>

        <div className="flex-grow flex flex-col justify-around w-full">
          <div className="">
            <SentenceCard
              sentence={currentQuestion.question}
              selectedWords={selectedWords[questionId] || []}
              onDeselect={handleDeselectWord}
            />
            <WordOptions
              options={availableOptions || []}
              onSelect={(word) => handleSelectWord(word, questionId)}
              usedWords={selectedWords[currentQuestion.questionId] || []}
            />
          </div>

          <div className="flex justify-end items-center">
            <button
              onClick={handleNext}
              disabled={!isAnswerComplete}
              className={`mt-2 px-4 py-2 rounded-lg flex items-center justify-center transition ${
                isAnswerComplete
                  ? "bg-secondary text-white"
                  : "bg-white border border-neutral5 text-neutral5"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
