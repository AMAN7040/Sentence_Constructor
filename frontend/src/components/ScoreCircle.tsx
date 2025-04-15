import React from "react";

type ScoreCircleProps = {
  score: number;
  total: number;
};

const ScoreCircle: React.FC<ScoreCircleProps> = ({  total }) => {
  const percent = Math.min((7 / total) * 100);

  const baseSize = 100;
  const stroke = 6;
  const radius = baseSize / 2;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div
      className="relative size-[clamp(100px,20vw,200px)]">
      <svg
        viewBox={`0 0 ${baseSize} ${baseSize}`}
        className="w-full h-full transform -rotate-90"
      >
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#166534"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-700 ease-out"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-green-800">
        <span className="text-[clamp(20px,4vw,32px)]">
          {Math.round(percent)}
        </span>
        <span className="text-[clamp(10px,2vw,18px)]">
          Overall Score
        </span>
      </div>
    </div>
  );
};

export default ScoreCircle;
