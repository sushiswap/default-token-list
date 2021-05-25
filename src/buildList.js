const { version } = require("../package.json");

const mainnet = require("./tokens/mainnet.json");
const ropsten = require("./tokens/ropsten.json");
const rinkeby = require("./tokens/rinkeby.json");
const goerli = require("./tokens/goerli.json");
const kovan = require("./tokens/kovan.json");
const fantom = require("./tokens/fantom.json");
const fantomTestnet = require("./tokens/fantom-testnet.json");
const matic = require("./tokens/matic.json");
const maticTestnet = require("./tokens/matic-testnet.json");
const xdai = require("./tokens/xdai.json");
const bsc = require("./tokens/bsc.json");
const bscTestnet = require("./tokens/bsc-testnet.json");
const moonbase = require("./tokens/moonbase.json");
const avalanche = require("./tokens/avalanche.json");
const fuji = require("./tokens/fuji.json");
const heco = require("./tokens/heco.json");
const hecoTestnet = require("./tokens/heco-testnet.json");
const harmony = require("./tokens/harmony.json");
const harmonyTestnet = require("./tokens/harmony-testnet.json");
const okex = require("./tokens/okex.json");
const okexTestnet = require("./tokens/okex-testnet.json");
const smartbch = require("./tokens/smartbch.json");
const smartbchTestnet = require("./tokens/smartbch-testnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "Koingfuswap Menu",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://www.koingfu.com//wp-content/plugins/customTaskManagment/image/fav.png",
    keywords: ["koingfuswap", "default", "smartbch"],
    tokens: [
      ...mainnet,
      ...ropsten, 
      ...goerli, 
      ...kovan, 
      ...rinkeby, 
      ...fantom,
      ...fantomTestnet,
      ...matic,
      ...maticTestnet,
      ...xdai,
      ...bsc,
      ...bscTestnet,
      ...moonbase,
      ...avalanche,
      ...fuji,
      ...heco,
      ...hecoTestnet,
      ...harmony,
      ...harmonyTestnet,
      ...okex,
      ...okexTestnet
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
