import {
    AlchemyConfig, Network, initializeAlchemy, getNftsForOwner } from 'alchemy-sdk';
import 'dotenv/config';

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings: AlchemyConfig = {
  apiKey: process.env.API_KEY,
  network: Network.ETH_RINKEBY,
  maxRetries: 10
};

const alchemy = initializeAlchemy(settings);
console.log(getNftsForOwner(alchemy, '0xshah.eth'));
