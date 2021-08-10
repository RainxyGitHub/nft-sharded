// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "./ERC20Template.sol";
import "./ERC721Template.sol";

contract NFTShardedFactory is Ownable {
    address private _erc721Template;
    address private _erc20Template;

    event NFTSharded(address indexed sender, address erc721Instance, address erc20Instance);

    constructor(){
        _erc721Template = address(new ERC721Template());
        _erc20Template = address(new ERC20Template());
    }

    function sharded(
        string memory nftName,
        string memory nftSymbol,
        string memory nftBaseUrl,
        uint256 genesisTokenId,
        string memory erc20Name,
        string memory erc20Symbol,
        uint256 erc20TotalSupply,
        uint8 decimals)
    external returns (address erc721Instance, address erc20Instance){
        require(erc20TotalSupply > 0, "ShardingFactory:erc20TotalSupply must gt 0");
        require(decimals >= 0, "ShardingFactory:decimals must gt 0");
        // create and init erc721 contract
        erc721Instance = Clones.clone(_erc721Template);
        ERC721Template(erc721Instance).initOwner(address(this));
        ERC721Template(erc721Instance).initialize(nftName, nftSymbol, nftBaseUrl);

        // create and init OEC20 contract
        erc20Instance = Clones.clone(_erc20Template);
        ERC20Template(erc20Instance).initOwner(address(this));
        ERC20Template(erc20Instance).initialize(erc721Instance, msg.sender, erc20Name, erc20Symbol,
            erc20TotalSupply, decimals);

        // mint genesis NFT to OEC20 contract
        ERC721Template(erc721Instance).mint(erc20Instance, genesisTokenId);

        // change erc721contract owner
        ERC721Template(erc721Instance).transferOwnership(msg.sender);
        ERC20Template(erc20Instance).transferOwnership(Ownable.owner());

        emit NFTSharded(msg.sender, erc721Instance, erc20Instance);
    }

}
