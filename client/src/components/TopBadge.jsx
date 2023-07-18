import React from "react";

const TopBadge = ({ remainingDays }) => {
  if (remainingDays <= 0)
    return (
      <div className="uppercase absolute top-2 left-2 px-4 py-2 bg-red-400 rounded-xl cursor-pointer font-semibold text-sm ">
        ENDED
      </div>
    );

  if (remainingDays <= 7) {
    return (
      <div className="uppercase absolute top-2 left-2 px-4 py-2 bg-yellow-500 rounded-xl cursor-pointer font-semibold text-sm ">
        ENDING SOON
      </div>
    );
  }

  return (
    <div className="uppercase absolute top-2 left-2 px-4 py-2 bg-emerald-400 rounded-xl cursor-pointer font-semibold text-sm ">
      ONGOING
    </div>
  );
};

export default TopBadge;
