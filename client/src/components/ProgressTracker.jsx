import React from "react";

import { calculateBarPercentage } from "../utils";

const ProgressTracker = ({
  target,
  amountCollected,
  small,
}) => {
  const percentage = calculateBarPercentage(
    target,
    amountCollected
  );

  return (
    <div
      className={`relative w-full ${
        small ? "h-[5px]" : "h-[20px]"
      }  bg-[#3a3a43] mt-2 rounded-lg`}
    >
      <div
        className="absolute h-full bg-[#4acd8d] rounded-lg"
        style={{
          width: `${percentage}%`,
          maxWidth: "100%",
        }}
      ></div>
    </div>
  );
};

export default ProgressTracker;
