import React from "react";

interface ProgressTrackerProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="flex justify-center space-x-2 mb-6">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <span
          key={index}
          className={`h-1.5 w-[clamp(24px,5vw,60px)] rounded-full transition-all duration-300 ${
            index < currentStep ? "bg-orange-400" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressTracker;
