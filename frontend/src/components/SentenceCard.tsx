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
    <div className="flex flex-col justify-between">
      <p
        className="font-body font-medium text-[clamp(15px,2vw,22px)] text-center text-[#616464] mb-4">
        Select the missing words in the correct order
      </p>
      <p className="font-body font-medium text-[clamp(16px,2.5vw,24px)] text-center tracking-normal leading-4 md:leading-8 lg:leading-10 sm:tracking-wide md:tracking-widest flex flex-wrap justify-center gap-y-2">
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            <span className="whitespace-pre-wrap">{part}</span>

            {index < parts.length - 1 && (
              <span className="relative inline-flex items-center justify-center mx-1 min-w-[85px] max-w-[100px] border-b-2 border-black h-[clamp(24px,5vw,36px)]">
                {selectedWords[index] && (
                  <button
                    type="button"
                    onClick={() => onDeselect?.(index)}
                    className="absolute inset-0 -top-0.5 flex items-center justify-center w-full h-full bg-white border border-[#BFC6C6] rounded-lg px-1"
                  >
                    <p className="text-[#414343] text-[clamp(10px,2.5vw,13px)] font-semibold truncate">
                      {selectedWords[index]}
                    </p>
                  </button>
                )}
              </span>
            )}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default SentenceCard;
