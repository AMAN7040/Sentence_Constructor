import React from "react";

interface SentenceCardProps {
  sentence: string;
  selectedWords: string[];
}

const SentenceCard: React.FC<SentenceCardProps> = ({
  sentence,
  selectedWords,
}) => {
  const parts = sentence.split("_____________");

  return (
    <p className="text-xl font-medium text-center leading-relaxed">
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < selectedWords.length ? (
            <span className="underline text-primary font-semibold mx-1">
              {selectedWords[index]}
            </span>
          ) : index < parts.length - 1 ? (
            <span className="mx-1 text-gray-400">__________</span>
          ) : null}
        </React.Fragment>
      ))}
    </p>
  );
};

export default SentenceCard;
