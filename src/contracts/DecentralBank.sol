pragma solidity ^0.5.0;

import "./RWD.sol";
import "./Tether.sol";

contract DecentralBank {
  string public name = "Decentral Bank";
  address public owner;
  Tether public tether;
  RWD public rwd;

  address[] public stakers;

  mapping(address => uint256) public stakingBalance;
  mapping(address => bool) public hasStaked;
  mapping(address => bool) public isStaking;

  event Deposit(address indexed user, uint256 amount);
  event Unstake(address indexed user, uint256 amount);
  event IssueTokens(address indexed user, uint256 amount);

  constructor(RWD _rwd, Tether _tether) public {
    rwd = _rwd;
    tether = _tether;
    owner = msg.sender;
  }

  function depositTokens(uint256 _amount) public {
    require(_amount > 0, "Amount cannot be 0");

    tether.transferFrom(msg.sender, address(this), _amount);
    stakingBalance[msg.sender] += _amount;

    if (!hasStaked[msg.sender]) {
      stakers.push(msg.sender);
    }

    isStaking[msg.sender] = true;
    hasStaked[msg.sender] = true;

    emit Deposit(msg.sender, _amount);
  }

  function unstakeTokens() public {
    uint256 balance = stakingBalance[msg.sender];

    require(balance > 0, "Staking balance cannot be less than zero");

    tether.transfer(msg.sender, balance);
    stakingBalance[msg.sender] = 0;
    isStaking[msg.sender] = false;

    emit Unstake(msg.sender, balance);
  }

  function issueTokens() public {
    require(msg.sender == owner, "Caller must be the owner");

    for (uint256 i = 0; i < stakers.length; i++) {
      address recipient = stakers[i];
      uint256 balance = stakingBalance[recipient] / 9;

      if (balance > 0) {
        rwd.transfer(recipient, balance);
        emit IssueTokens(recipient, balance);
      }
    }
  }

  function checkContractRwdBalance() public view returns (uint256) {
    return rwd.balanceOf(address(this));
  }
}
