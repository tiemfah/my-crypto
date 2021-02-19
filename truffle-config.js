require("babel-register");
require("babel-polyfill");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "i lost my mnemonic help";

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          "https://ropsten.infura.io/v3/f9611c1f80eb48c7b0d8d2adfb5b3f26"
        );
      },
      network_id: 3,
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "petersburg",
    },
  },
};
