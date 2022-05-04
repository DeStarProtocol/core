const DestarFactory = artifacts.require("DestarFactory");

module.exports = async function (deployer) {
  await deployer.deploy(DestarFactory, '0x0f1e32d9A1287Fa9542FD6E4e8b0663e7b1Fae8d');
  let instance = await DestarFactory.deployed();
  let INIT_CODE_HASH = await instance.INIT_CODE_HASH.call();
  console.log('INIT_CODE_HASH - ', INIT_CODE_HASH)
};
