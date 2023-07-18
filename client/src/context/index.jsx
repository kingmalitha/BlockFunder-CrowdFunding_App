import React, { useContext, createContext } from "react";

import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";

import { ethers } from "ethers";
import { toast } from "react-hot-toast";
import { generateId } from "../utils";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const contract_address = import.meta.env
    .VITE_CONTRACT_ADDRESS;

  const { contract, error } = useContract(contract_address);

  if (error) {
    toast.error("Error loading contract !");
    console.error("Error loading contract", error);
  }

  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const address = useAddress();

  const connect = useMetamask();

  const publishCampaign = async (form) => {
    const pId = generateId();

    try {
      const data = await createCampaign({
        args: [
          address, // owner
          form.title, // title
          form.description, // description
          form.target,
          new Date(form.deadline).getTime(), // deadline,
          form.image,
        ],
      });

      toast.success("Campaign successfully created!");
    } catch (error) {
      toast.error("Campaign Creation failed!");
    }
  };

  const getCampaigns = async () => {
    const campaigns = await contract.call("getCampaigns");

    const campaignId = generateId();

    const parsedCampaigns = campaigns.map(
      (campaign, i) => ({
        owner: campaign.owner,
        campaign: campaign.pId,
        title: campaign.title,
        description: campaign.description,
        target: ethers.utils.formatEther(
          campaign.target.toString()
        ),
        deadline: campaign.deadline.toNumber(),
        amountCollected: ethers.utils.formatEther(
          campaign.amountCollected.toString()
        ),
        image: campaign.image,
        pid: i,
        campaignId: campaignId,
      })
    );

    return parsedCampaigns;
  };

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === address
    );

    return filteredCampaigns;
  };

  const getNoOfUserCampaigns = async (owner_address) => {
    const allCampaigns = await getCampaigns();

    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === owner_address
    );

    return filteredCampaigns.length;
  };

  const donate = async (campaignId, amount) => {
    try {
      const data = await contract.call(
        "donateToCampaign",
        [campaignId],
        {
          value: ethers.utils.parseEther(amount),
        }
      );

      toast.success("Transaction successful!");

      return data;
    } catch (error) {
      toast.error("Transaction failed!");
      throw error;
    }
  };

  const getDonations = async (campaignId) => {
    const donations = await contract.call("getDonators", [
      campaignId,
    ]);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(
          donations[1][i].toString()
        ),
      });
    }

    return parsedDonations;
  };

  return (
    <StateContext.Provider
      value={{
        address,
        connect,
        contract,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        getNoOfUserCampaigns,
        donate,
        getDonations,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () =>
  useContext(StateContext);
