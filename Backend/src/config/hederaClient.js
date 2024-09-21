const { Client, PrivateKey, AccountId } = require("@hashgraph/sdk");
require('dotenv').config();

const operatorId = AccountId.fromString(process.env.HEDERA_ACCOUNT_ID);
const operatorKey = PrivateKey.fromString(process.env.HEDERA_PRIVATE_KEY);

// Hedera client setup (Testnet)
const client = Client.forTestnet().setOperator(operatorId, operatorKey);

module.exports = client;
