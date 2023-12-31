import React from "react";

import { tagType, thirdweb } from "../assets";

import { daysLeft } from "../utils";

const FundCard = ({
  owner,
  title,
  description,
  target,
  deadline,
  amountCollected,
  image,
  handleClick,
}) => {
  const remainingDays = daysLeft(deadline);

  return (
    <div
      className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer"
      onClick={handleClick}
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={`${title}_image`}
        className="w-full h-[158px] object-cover rounded-[15px]"
      />

      {/* CONTENT */}
      <div className="flex flex-col p-4 gap-4">
        {/* CATEGORY */}
        <div className="flex flex-row items-center gap-2">
          <img
            src={tagType}
            alt="tag"
            className="w-[17px] h-[17px] object-contain"
          />
          <p className="mr-[12px] mt-[2px] font-epilogue text-[12px] font-medium text-[#808191]">
            Education
          </p>
        </div>

        {/* TITLE & DESCRIPTION */}
        <div className="block">
          <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">
            {title}
          </h3>
          <p className="text-[#808191] text-left leading-[18px] font-normal  truncate mt-[5px]">
            {description}
          </p>
        </div>

        {/* AMOUNT & DATE */}
        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] leading-[18px] text-[#b2b3bd] sm:max-w-[120px]">
              {amountCollected}
            </h4>
            <p className="mt-[3px] font-epilogue font-semibold text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px]">
              Raised of {target}
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] leading-[18px] text-[#b2b3bd] sm:max-w-[120px]">
              {remainingDays}
            </h4>
            <p className="mt-[3px] font-epilogue font-semibold text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px]">
              Days Left
            </p>
          </div>
        </div>

        {/* CREATED BY */}
        <div className="flex items-center gap-[12px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <img
              src={thirdweb}
              alt="user"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] truncate text-[#808191]">
            by{" "}
            <span className="text-[#b2b3bd]">{owner}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
