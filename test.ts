import * as sdk from 'alchemy-sdk';
import 'dotenv/config';

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings: sdk.AlchemyConfig = {
  apiKey: process.env.API_KEY,
  network: sdk.Network.ETH_MAINNET,
  maxRetries: 10
};

const alchemy = sdk.initializeAlchemy(settings);
sdk.getNftsForOwner(alchemy, '0xshah.eth').then(thing => {
  console.log(thing);
});
