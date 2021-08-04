const NFTShardedFactory = artifacts.require("NFTShardedFactory");

module.exports = function (deployer) {
    deployer.deploy(NFTShardedFactory);
};
