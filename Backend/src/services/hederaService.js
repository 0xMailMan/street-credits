const {
    TokenCreateTransaction,
    TokenMintTransaction,
    TransferTransaction
  } = require("@hashgraph/sdk");
  const client = require('../config/hederaClient');
  
  // Mint NFT with event details and attendance ratio
  async function mintEventNFT(tokenId, userId, eventDetails, attendanceRatio) {
    const metadata = {
      event_name: eventDetails.name,
      event_date: eventDetails.start_time,
      description: eventDetails.description,
      attendance_ratio: attendanceRatio
    };
  
    const mintTransaction = await new TokenMintTransaction()
      .setTokenId(tokenId)
      .setMetadata([Buffer.from(JSON.stringify(metadata))])
      .execute(client);
  
    const receipt = await mintTransaction.getReceipt(client);
    console.log(`Minted NFT for user ${userId}. Status: ${receipt.status}`);
  }
  
  module.exports = {
    mintEventNFT,
  };
  