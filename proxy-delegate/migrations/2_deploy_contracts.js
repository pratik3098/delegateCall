const ProxyDelegate = artifacts.require('ProxyDelegate');
const NewCall = artifacts.require('NewCall');
const SomeLibrary = artifacts.require('SomeLibrary');

module.exports = function(deployer) {
    deployer.deploy(SomeLibrary)
    .then(() => deployer.deploy(ProxyDelegate, SomeLibrary.address));

    deployer.deploy(SomeLibrary)
    .then(() => deployer.deploy(NewCall, SomeLibrary.address));
}