import React from "react";

interface WordOptionProps {
  options: string[];
  onSelect: (word: string) => void;
  usedWords: string[];
}

const WordOptions: React.FC<WordOptionProps> = ({ options, onSelect }) => {
  return (
    <div className="flex justify-center flex-wrap gap-2 md:gap-4 mt-6">
      {options.map((word, idx) => {
        return (
          <div>
            <button
              key={idx}
              onClick={() => onSelect(word)}
              className={`w-[clamp(50px,20vw,100px)] h-[clamp(20px,5vw,45px)]  rounded-lg font-medium border border-[#BFC6C6] text-[#FFFFFF]
              transition-all duration-150 ease-in-out hover:scale-105
              `}
            >
              <p className="text-[#414343] text-[clamp(11px,1.3vw,15px)]">
                {word}
              </p>
            </button>
          </div>
          
        );
      })}
    </div>
  );
};

export default WordOptions;
