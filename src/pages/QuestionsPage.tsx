import React, { useEffect, useState } from "react";
import { useQuestions } from "../hooks/useQuestions";
import WordOptions from "../components/WordOptions";
import SentenceCard from "../components/SentenceCard";

const QuestionsPage: React.FC = () => {
  const { data, loading, error } = useQuestions();
  const [selectedWords, setSelectedWords] = useState<Record<string, string[]>>(
    {}
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const questions = data?.questions || [];
  const currentQuestion = questions[currentIndex];

  const handleSelectWord = (word: string, questionId: string) => {
    setSelectedWords((prevState) => {
      const currentSelections = prevState[questionId] || [];
      if (!currentSelections.includes(word)) {
        return {
          ...prevState,
          [questionId]: [...currentSelections, word],
        };
      }
      return prevState;
    });
  };

  const isAnswerComplete =
    currentQuestion &&
    selectedWords[currentQuestion.questionId]?.length ===
      currentQuestion.correctAnswer.length;

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    console.log("Fetched Data:", data);
  }, [data]);

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
    <div className="bg-background min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
        Complete the Sentence
      </h2>

      <div className="mb-10 w-full max-w-3xl">
        <SentenceCard
          sentence={currentQuestion.question}
          selectedWords={selectedWords[currentQuestion.questionId] || []}
        />
        <WordOptions
          options={currentQuestion.options}
          onSelect={(word) =>
            handleSelectWord(word, currentQuestion.questionId)
          }
          usedWords={selectedWords[currentQuestion.questionId] || []}
        />
      </div>

      {isAnswerComplete && (
        <button
          onClick={handleNext}
          className="mt-4 px-6 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default QuestionsPage;
