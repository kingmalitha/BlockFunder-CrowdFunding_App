import React from "react";

const DonationCard = ({
  image,
  title,
  description,
  target,
  amountCollected,
  deadline,
  owner,
  status,
}) => {
  const des =
    "A group of Oregon residents are trying to stop the aerial spraying of pesticides on a private forest land that threatens their water supply and wildlife.";

  return (
    <div className="relative">
      <div className="bg-[#1c1c24] rounded-xl relative group h-[480px] overflow-hidden shadow-md shadow-slate-600">
        {/* IMAGE */}
        <img
          src="https://uploads.wefunder.com/uploads/company/custom_card_photo/131920/company_card_Spinn_explore_card_photo_1683061600162.jpg"
          alt="image"
          className="w-full h-[300px] object-cover rounded-xl"
        />
        {/* TAG */}
        <div className="uppercase absolute top-2 left-2 px-4 py-2 bg-emerald-400 rounded-xl cursor-pointer font-semibold text-sm ">
          ONGOING
        </div>

        {/* CONTENT */}
        <div className="bg-[#1c1c24] border-t-[1px] border-[#1c1c24] absolute w-full h-full z-[100] top-[250px] transition-up ease-in-out duration-300 hover:top-[180px] group-hover:top-[180px] p-4">
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
              Protect Beaver Creek Watershed
            </h3>

            {/* DESCRIPTION */}
            <p className="text-[#808191] text-left leading-[18px] font-normal text-[12px] ">
              {des.substring(0, 100) + "..."}
            </p>

            <div>
              {/* PROGRESS TRACKER */}
              <ProgressTracker
                amountCollected={2}
                target={10}
                small
              />

              {/* AMOUNT  */}
              <p className="mt-[5px] font-normal text-[12px] leading-[18px] text-[#e4e4ea] text-right ">
                2 / 10 ETH
              </p>

              {/* DAYS REMAINING */}
              <p className="text-[#808191] text-left leading-[18px] font-normal text-[12px] ">
                Date Remaining:{" "}
                <span className="font-semibold text-[#e4e4ea]">
                  10 days{" "}
                </span>
              </p>
            </div>

            {/* CREATED BY */}
            <div className="absolute bottom-0 left-5">
              <h4 className="text-[14px] font-semibold text-white text-left leading-[26px] truncate">
                Created by:
              </h4>

              <p className=" mt-1 text-[#808191] text-left leading-[18px] font-normal text-[12px] truncate ">
                0x54Ddb68c89e143b0d5dCF5F9f9EE49c1183E47C3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
