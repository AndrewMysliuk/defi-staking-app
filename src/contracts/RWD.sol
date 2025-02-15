pragma solidity ^0.5.0;

contract RWD {
  string public name = "Reward Token";
  string public symbol = "RWD";
  uint8 public decimals = 18;
  uint256 public totalSupply = 1000000000000000000000000;

  event Transfer(address indexed from, address indexed to, uint256 value);
  event Approval(address indexed owner, address indexed spender, uint256 value);

  mapping(address => uint256) public balanceOf;
  mapping(address => mapping(address => uint256)) public allowance;

  constructor() public {
    balanceOf[msg.sender] = totalSupply;
  }

  function transfer(address to, uint256 value) public returns (bool success) {
    require(balanceOf[msg.sender] >= value, "Insufficient balance");

    balanceOf[msg.sender] -= value;
    balanceOf[to] += value;

    emit Transfer(msg.sender, to, value);
    return true;
  }

  function approve(address spender, uint256 value) public returns (bool success) {
    allowance[msg.sender][spender] = value;
    emit Approval(msg.sender, spender, value);
    return true;
  }

  function transferFrom(address from, address to, uint256 value) public returns (bool success) {
    require(value <= balanceOf[from], "Insufficient balance");
    require(value <= allowance[from][msg.sender], "Allowance exceeded");

    balanceOf[from] -= value;
    balanceOf[to] += value;
    allowance[from][msg.sender] -= value;

    emit Transfer(from, to, value);
    return true;
  }
}
