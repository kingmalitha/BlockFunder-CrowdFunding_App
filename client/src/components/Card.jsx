import React from "react";
import TopBadge from "./TopBadge";
import { daysLeft } from "../utils";
import { tagType, thirdweb } from "../assets";
import ProgressTracker from "./ProgressTracker";

const Card = ({
  image,
  owner,
  title,
  description,
  deadline,
  target,
  amountCollected,
  handleClick,
}) => {
  const remainingDays = daysLeft(deadline);

  return (
    <div className="relative" onClick={handleClick}>
      <div className="bg-[#1c1c24] rounded-xl relative group h-[480px] overflow-hidden  shadow-md shadow-slate-600">
        {/* IMAGE */}
        <img
          src={image}
          alt="image"
          className="w-full h-[300px] object-cover rounded-xl"
        />
        {/* TAG */}
        <TopBadge remainingDays={remainingDays} />

        {/* CONTENT */}
        <div className="bg-[#1c1c24] border-t-[1px] border-[#1c1c24] absolute w-full h-[320px] z-[100] top-[250px] transition-up ease-in-out duration-300 hover:top-[180px] group-hover:top-[180px] p-4">
          <div className="relative flex flex-col gap-3">
            <div className=" absolute -top-12 right-6 w-[60px] h-[60px] rounded-full flex justify-center items-center bg-[#13131a] border-4 border-[#282833]">
              <img
                src={thirdweb}
                alt="user"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            {/* CATEGORY */}
            <div className="flex flex-row items-center gap-2">
              <img
                src={tagType}
                alt="tag"
                className="w-[17px] h-[17px] object-contain"
              />
              <p className="mr-[12px] mt-[2px] font-epilogue text-[12px] font-medium text-[#808191] uppercase">
                Education
              </p>
            </div>

            {/* TITLE */}
            <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">
              {title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-[#808191] text-left leading-[18px] font-normal text-[12px] ">
              {description.substring(0, 100) + "..."}
            </p>

            <div>
              {/* PROGRESS TRACKER */}
              <ProgressTracker
                amountCollected={amountCollected}
                target={target}
                small
              />

              {/* AMOUNT  */}
              <p className="mt-[5px] font-normal text-[12px] leading-[18px] text-[#e4e4ea] text-right ">
                {amountCollected} / {target} ETH
              </p>

              {/* DAYS REMAINING */}
              <p className="text-[#808191] text-left leading-[18px] font-normal text-[12px] ">
                Date Remaining:{" "}
                <span className="font-semibold text-[#e4e4ea]">
                  {remainingDays} days{" "}
                </span>
              </p>
            </div>
          </div>

          {/* CREATED BY */}
          <div className="absolute bottom-10">
            <h4 className="text-[14px] font-semibold text-white text-left leading-[26px] truncate">
              Created by:
            </h4>

            <p className="mt-1 text-[#808191] text-left leading-[18px] font-normal text-[12px] truncate ">
              {owner}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
