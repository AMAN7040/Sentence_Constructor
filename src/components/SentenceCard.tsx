import React from "react";

interface SentenceCardProps {
  sentence: string;
  selectedWords: string[];
  onDeselect?: (index: number) => void;
}

const SentenceCard: React.FC<SentenceCardProps> = ({
  sentence,
  selectedWords,
  onDeselect,
}) => {
  const parts = sentence.split("_____________");

  return (
    <p className="text-xl font-medium text-center leading-relaxed flex flex-wrap justify-center">
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          <span>{part}</span>
          {index < selectedWords.length ? (
            <button
              type="button"
              onClick={() => onDeselect?.(index)}
              className="mx-1 underline text-primary font-semibold hover:text-red-500 transition"
            >
              {selectedWords[index]}
            </button>
          ) : index < parts.length - 1 ? (
            <span className="mx-1 text-gray-400">__________</span>
          ) : null}
        </React.Fragment>
      ))}
    </p>
  );
};

export default SentenceCard;
