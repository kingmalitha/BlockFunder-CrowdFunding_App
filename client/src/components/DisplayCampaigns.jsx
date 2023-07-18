import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loader } from "../assets";

import { Card, CustomButton } from ".";

const DisplayCampaigns = ({
  title,
  isLoading,
  campaigns,
}) => {
  const navigate = useNavigate();
  const [nextItems, setNextItems] = useState(4);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 4);
  };

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.campaignId}`, {
      state: campaign,
    });
  };

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {title} ({campaigns.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <div className="w-full h-screen flex mt-[20px] justify-center">
            <img
              src={loader}
              alt="loader"
              className="w-[100px] h-[100px] object-contain"
            />
          </div>
        )}
        {!isLoading && campaigns.lenth === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaigns yet.
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 w-[80%] mx-auto md:w-full md:grid-cols-2 lg:grid-cols-4  gap-10 text-white ">
        {!isLoading &&
          campaigns.length > 0 &&
          campaigns
            ?.slice(0, nextItems)
            ?.map((campaign, i) => (
              <Card
                key={campaign.pid}
                {...campaign}
                handleClick={() => handleNavigate(campaign)}
              />
            ))}
      </div>

      {nextItems < campaigns.length &&
        campaigns.length > 4 && (
          <div className="w-[80%] md:w-72 mx-auto mt-10">
            <CustomButton
              title="Load More Campaigns"
              styles="w-full bg-[#8c6dfd]"
              btnType={"button"}
              handleClick={loadMoreHandler}
            />
          </div>
        )}
    </div>
  );
};

export default DisplayCampaigns;
