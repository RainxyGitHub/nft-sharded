### 操作
#### 1、安装truffle
安装方式详见https://github.com/trufflesuite/truffle
也可参考文档：https://truffle.tryblockchain.org/

#### 2、本地初始化工程
本地新建一个目录执行：
truffle init
npm init
安装openzeppelin，这个项目是合约框架
npm install @openzeppelin/contracts
安装hdwallet-provider，这个项目是固定种子，每次账号都会相同
npm install @truffle/hdwallet-provider

#### 3、编写合约

#### 4、编译合约
truffle compile

#### 5、修改truffle-config.js, config network 使用本地Ganache

#### 6、部署合约
truffle migrate
如果修改代码之后，需要删掉build目录重新编译，或者执行如下指令方可
truffle migrate --reset
如果需要发布到其他环境，则指定配置，配置在truffle-config.js里面的networks 参数
truffle migrate --network

#### 7、进入控制台Ganache，即可开始调试，控制台可以直接写nodejs代码，以及调用web3js
truffle console


调试方法===============================================================
-- 查询账号列表
web3.eth.getAccounts()
-- 初始化本地合约
let factory = await NFTShardedFactory.deployed();
-- 或者通过地址初始化合约
let factory = await NFTShardedFactory.at('合约地址');

-- 碎片化
factory.sharded('NFT','NFT','http://test.NFT.com','0','ERC','ERC','1000000000000000000000000000','18');
-- 查询最新的事件
factory.getPastEvents('NFTSharded',{})
参数：
filter - Object : 可选，按索引参数过滤事件，例如 {filter: {myNumber: [12,13]}} 表示所有“myNumber” 为12 或 13的事件
fromBlock - Number : 可选，仅读取从该编号开始的块中的历史事件。
toBlock - Number : 可选，仅读取截止到该编号的块中的历史事件，默认值为"latest"

### 调试合约
debug txid


