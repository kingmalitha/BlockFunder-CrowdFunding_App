<!-- GENERATE README FILE FOR CROWD FUNDING BLOCKCHAIN APP - BLOCKFUNDER -->

# BlockFunder - Crowd Funding Blockchain App

## Description

This is a Crowd Funding Blockchain App that allows users to create campaigns and contribute to them. The creator of the campaign can create requests to spend the money contributed to the campaign.

## Features

- Create Campaigns
- Contribute to Campaigns
- Show donators
- Profile

## Planned Features

- [ ] Get all donations done by a user
- [ ] Withdraw Funds
- [ ] Report unsuitable campaigns
- [ ] Approve Campaigns Feature
- [ ] Add Dropbox instead of using links (Cloudinary implementation)
- [ ] Search Campaigns
- [ ] Filter Campaigns (by category, by date)

## Technologies

- Solidity
- React
- Thirdweb
- Hardhat

## Installation

#### Client (React)

1. Clone the repo

   ```bash
   git clone https://github.com/kingmalitha/BlockFunder-CrowdFunding_App.git
   ```

2. Go to client folder and install the dependencies

   ```bash
   cd client
   npm install
   ```

3. Create .env.local and add required variables in .env.example file

4. Run the app

   ```bash
   npm run dev
   ```

#### Web3/Blockchain (Hardhat/Thirdweb)

1. Go to web3 folder

   ```bash
   npm run deploy
   ```

## Screenshots

![campaign-home](/imgs/campaign-home.png)

![campaign-details](/imgs/campaign-details.png)

![campaign-profile](/imgs/campaign-profile.png)
