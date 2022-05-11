import { AlchemyConfig, Network, initializeAlchemy } from 'alchemy-sdk';
require("dotenv").config();

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: process.env.API_KEY,
  network: Network.ETH_RINKEBY,
  maxRetries: 10
};

const alchemy = initializeAlchemy(settings);