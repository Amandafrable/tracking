import React from "react";
import clsx from "clsx";

const TrackingProgress = ({ steps = [], currentStep = 0 }) => {
  return (
    <div className="w-full px-4 py-6">
      {/* Container: horizontal on md+, vertical on sm */}
      <div className="flex flex-col md:flex-row justify-between relative md:items-center">

        {/* Connector line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10" />
        <div className="block md:hidden absolute left-1/2 top-0 w-1 h-full bg-gray-200 -z-10" />

        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div
              key={index}
              className="flex md:flex-col flex-row md:items-center items-start md:w-full w-full mb-6 md:mb-0"
            >
              {/* Circle / Step */}
              <div
                className={clsx(
                  "w-10 h-10 flex items-center justify-center rounded-full border-2 shrink-0",
                  isCompleted
                    ? "bg-green-500 border-green-600 text-white"
                    : isCurrent
                    ? "bg-blue-500 border-blue-600 text-white"
                    : "bg-white border-gray-300 text-gray-500"
                )}
              >
                {isCompleted ? "✓" : index + 1}
              </div>

              {/* Step label */}
              <span
                className={clsx(
                  "mt-2 md:mt-2 md:text-center text-left ml-4 md:ml-0 text-sm",
                  isCompleted || isCurrent
                    ? "font-semibold text-gray-800"
                    : "text-gray-400"
                )}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrackingProgress;
