import React from "react";

interface WordOptionProps {
  options: string[];
  onSelect: (word: string) => void;
  usedWords: string[];
}

const WordOptions: React.FC<WordOptionProps> = ({
  options,
  onSelect,
  usedWords,
}) => {
  return (
    <div className="flex justify-center flex-wrap gap-4 mt-6">
      {options.map((word, idx) => {
        const isUsed = usedWords.includes(word);
        return (
          <button
            key={idx}
            disabled={isUsed}
            onClick={() => onSelect(word)}
            className={`px-4 py-2 rounded-lg font-medium border border-gray-300 
              transition-all duration-150 ease-in-out hover:scale-105
              ${
                isUsed
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-secondary text-white hover:bg-secondary/90"
              }`}
          >
            {word}
          </button>
        );
      })}
    </div>
  );
};

export default WordOptions;
