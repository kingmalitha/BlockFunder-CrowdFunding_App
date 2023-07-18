import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import {
  CustomButton,
  CountBox,
  Loader,
} from "../components";
import { calculateBarPercentage, daysLeft } from "../utils";
import { thirdweb } from "../assets";

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    getDonations,
    address,
    contract,
    getNoOfUserCampaigns,
    donate,
    connect,
  } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [donators, setDonators] = useState([]);
  const [noOfCampaigns, setNoOfCampaigns] = useState(0);

  const remainingDays = daysLeft(state.deadline);

  const fetchDonations = async () => {
    const data = await getDonations(state.pid);

    setDonators(data);
  };

  const fetchNoOfCampaigns = async () => {
    const data = await getNoOfUserCampaigns(state.owner);
    setNoOfCampaigns(data);
  };

  const handleDonate = async () => {
    setIsLoading(true);

    try {
      await donate(state.pid, amount);
      window.location.reload();
    } catch (error) {}

    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchDonations();
    if (contract) fetchNoOfCampaigns();
  }, [address, contract]);

  return (
    <div>
      {isLoading && <Loader />}

      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img
            src={state.image}
            alt="campaign"
            className="w-full h-[410px] object-cover rounded-xl"
          />
          <h4 className=" my-[20px] font-epilogue font-semibold text-[18px] text-white uppercase">
            {`Progress Tracker (${calculateBarPercentage(
              state.target,
              state.amountCollected
            )}% Completed)`}
          </h4>
          <div className="relative w-full h-[20px] bg-[#3a3a43] mt-2 rounded-lg">
            <div
              className="absolute h-full bg-[#4acd8d] rounded-lg"
              style={{
                width: `${calculateBarPercentage(
                  state.target,
                  state.amountCollected
                )}%`,
                maxWidth: "100%",
              }}
            ></div>
          </div>
        </div>

        {/* COUNT BOXES */}
        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox
            title="Days Left"
            value={remainingDays}
          />
          <CountBox
            title={`Raised of ${state.target}`}
            value={state.amountCollected}
          />
          <CountBox
            title="Total Donators"
            value={donators.length}
          />
        </div>
      </div>

      {/* OTHER DETAILS */}

      <div className="mt-[30px] flex lg:flex-row flex-col gap-5">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
              Creator
            </h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer">
                <img
                  src={thirdweb}
                  alt="user"
                  className="w-[60%] h-[60%] object-contain"
                />
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-white break-all">
                  {state.owner}
                </h4>
                {noOfCampaigns > 0 && (
                  <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">
                    {noOfCampaigns} Campaigns
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
              Story
            </h4>

            <div className="mt-[20px]">
              <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                {state.description}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-white uppercase">
              Donators
            </h4>

            <div className="mt-[20px] flex flex-col gap-4">
              {donators.length > 0 ? (
                donators.map((item, index) => (
                  <div
                    key={`${item.donator}-${index}`}
                    className="flex justify-between items-center gap-4"
                  >
                    <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">
                      {index + 1}. {item.donator}
                    </p>
                    <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] break-ll">
                      {item.donation}
                    </p>
                  </div>
                ))
              ) : (
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                  No donators yet. Be the first one!
                </p>
              )}
            </div>
          </div>
        </div>

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
                  onChange={(e) =>
                    setAmount(e.target.value)
                  }
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
                  Your donation can make a lasting
                  difference in someone&apos;s life. Join us
                  today and help us create a better
                  tomorrow.
                </p>
              </div>

              <CustomButton
                btnType="button"
                disabled={amount === "" || isLoading}
                title="Fund Campaign"
                styles="w-full bg-[#8c6dfd]"
                handleClick={
                  address ? handleDonate : connect
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
