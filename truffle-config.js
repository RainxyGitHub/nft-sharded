const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "save party task evolve radio shove stamp borrow panda cake family wool";

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",     // Localhost (default: none)
            port: 8545,            // Standard Ethereum port (default: none)
            network_id: "*",       // Any network (default: none)
            gas: 10000000,
            gasPrice: 1000000000
        },
        test: {
            host: "10.199.6.34",     // Localhost (default: none)
            port: 30323,            // Standard Ethereum port (default: none)
            network_id: "*",       // Any network (default: none)
            gas: 10000000,
            gasPrice: 1000000000
        },
        main: {
            provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/e0c525eaa30740e2a0ff56b466b0797e`),
            network_id: "*",
            gas: 10000000,
            gasPrice: 1000000000
        },
        rinkeby: {
            provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/e0c525eaa30740e2a0ff56b466b0797e`),
            network_id: "4",
            gas: 7500000,
            gasPrice: 1000000000,
            websockets: true,
            timeoutBlocks: 50000
        },
        ropsten: {
            provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/e0c525eaa30740e2a0ff56b466b0797e`),
            network_id: "3",
            gas: 7500000,
            gasPrice: 1000000000,
            timeoutBlocks: 50000,
            websockets: true
        }
    },

    mocha: {
        // timeout: 100000
        // reporter: 'eth-gas-reporter',
        // reporterOptions: {
        //     excludeContracts: ['NFTShardedFactory']
        // }
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            // settings: {          // See the solidity docs for advice about optimization and evmVersion
            //  optimizer: {
            //    enabled: false,
            //    runs: 200
            //  },
            //  evmVersion: "byzantium"
            // }
        }
    },

    db: {
        enabled: false
    }
};
