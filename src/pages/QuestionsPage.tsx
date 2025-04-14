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
          selectedWords={selectedWords[questionId] || []}
          onDeselect={handleDeselectWord}
        />
        <WordOptions
          options={availableOptions || []}
          onSelect={(word) => handleSelectWord(word, questionId)}
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
