pragma solidity =0.5.16;

import '../DestarERC20.sol';

contract ERC20 is DestarERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
