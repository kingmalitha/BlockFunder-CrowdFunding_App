import React from "react";

const FundSection = () => {
  return (
    <div className="flex-1">
      <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
        Fund
      </h4>

      <div className="mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]">
        <p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-[#808191]">
          Fund the campaign
        </p>
        <div className="mt-[30px]">
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="minimum: 0.001"
              step="0.001"
              inputMode="numeric"
              disabled={isLoading}
              min={0.001}
              max={1}
              className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px] focus:border-white/50 disabled:cursor-not-allowed"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <div className="w-fit py-[10px] px-[20px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue  text-[16px] leading-[30px] text-[#4b5264] rounded-[10px]">
              ETH
            </div>
          </div>

          <div className="my-[20px] p-4 bg-[#13131a] rounded-[10px]">
            <h4 className="font-epilogue font-semibold text-[14px] leading-[22px] text-white">
              Make a difference with your donation.
            </h4>
            <p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">
              Your donation can make a lasting difference in
              someone&apos;s life. Join us today and help us
              create a better tomorrow.
            </p>
          </div>

          <CustomButton
            btnType="button"
            disabled={amount === "" || isLoading}
            title="Fund Campaign"
            styles="w-full bg-[#8c6dfd]"
            handleClick={address ? handleDonate : connect}
          />
        </div>
      </div>
    </div>
  );
};

export default FundSection;
