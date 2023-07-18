// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract BlockFunder{

    struct Campaign{
    address owner;
    string title;
    uint256 pId;
    string description;
    uint256 target;
    uint256 deadline;
    uint256 amountCollected;
    string image;
    address[] donators;
    uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;
    // In order to use campaigns[0] likewise

    uint256  public numberOfCampaigns =0;

    function createCampaign(
    address _owner,
    uint256 _pId, 
    string memory _title, 
    string memory _description, 
    uint256 _target, 
    uint256 _deadline, 
    string memory _image
    ) public returns (uint256){
        Campaign storage campaign = campaigns[numberOfCampaigns];

        // is everything ok?
        require(campaign.deadline <block.timestamp, "Deadline must be in the future");

        campaign.owner = _owner;
        campaign.pId = _pId;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected =0;
        campaign.image = _image;

        numberOfCampaigns++;

        return numberOfCampaigns -1;
        // return the index of most recent campaign (this one)
    }


    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;

        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);

        (bool sent,) = payable(campaign.owner).call{value: amount}("");

        if(sent) {
            campaign.amountCollected = campaign.amountCollected + amount;
        }
    }

    function getDonators(
    uint256 _pId
    ) public view returns (address[] memory, uint256[] memory){
        return (campaigns[_pId].donators, campaigns[_pId].donations);
    }

    

    function getCampaigns() public view returns (Campaign[] memory){
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        for(uint256 i=0; i<numberOfCampaigns; i++){
            Campaign storage item = campaigns[i];
            allCampaigns[i] = item;
        }        

        return allCampaigns;
    }

}