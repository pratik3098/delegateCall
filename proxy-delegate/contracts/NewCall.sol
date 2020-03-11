pragma solidity ^0.5.0;
contract NewCall {

    address public owner;
    address public delegate;
    event LogResult(bytes result);

    constructor(address deleAddr) public {
        owner = msg.sender;
        delegate = deleAddr;
    }

    function() external {
        (bool success, bytes memory res) = delegate.call(msg.data);
        require(success, "Error: External call failed");
        emit LogResult(res);
    }
}