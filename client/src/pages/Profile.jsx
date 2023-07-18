import React, { useEffect, useState } from "react";

import { useStateContext } from "../context";
import {
  CustomButton,
  DisplayCampaigns,
} from "../components";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getUserCampaigns, connect } =
    useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  if (!address)
    return (
      <div>
        <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
          Your Campaigns
        </h1>

        <div className="mt-10">
          <p className="text-[#b2b3bd] text-center">
            Ooops...
            <br />
            Seems like you are not yet connected. Please
            connect to continue.
          </p>
          <div className="w-48 mx-auto mt-5">
            <CustomButton
              title="Connect Wallet"
              handleClick={connect}
              styles="w-full bg-[#8c6dfd]"
              btnType={"button"}
            />
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <DisplayCampaigns
        title="Your Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </div>
  );
};

export default Profile;
