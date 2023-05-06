// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Transaction {

    struct Memos{
        string name;
        string message;
        uint time;
        address form;
    }

    Memos[] memos;
    address payable owner;

    constructor(){
        owner=payable(msg.sender); 
    }

    function transfer(string memory name, string memory message) public payable {
        require(msg.value>0,"Not accepted");
        owner.transfer(msg.value);
        memos.push(Memos(name,message,block.timestamp,msg.sender));
    }

    function getMemos() public view returns(Memos[] memory){
        return memos;
    }
}