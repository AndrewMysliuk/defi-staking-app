const Tether = artifacts.require("Tether")
const RWD = artifacts.require("RWD")
const DecentralBank = artifacts.require("DecentralBank")

contract("DecentralBank", ([owner, customer]) => {
  let tether, rwd, decentralBank

  function tokens(amount) {
    return web3.utils.toWei(amount, "ether")
  }

  before(async () => {
    tether = await Tether.new()
    rwd = await RWD.new()
    decentralBank = await DecentralBank.new(rwd.address, tether.address)

    await rwd.transfer(decentralBank.address, tokens("1000000"))
    await tether.transfer(customer, tokens("100"), { from: owner })
  })

  describe("Mock Tether Deployment", () => {
    it("matches name successfully", async () => {
      const name = await tether.name()
      assert.equal(name, "Mock Tether Token")
    })
  })

  describe("Reward Token Deployment", () => {
    it("matches name successfully", async () => {
      const name = await rwd.name()
      assert.equal(name, "Reward Token")
    })
  })

  describe("Decentral Bank Deployment", () => {
    it("matches name successfully", async () => {
      const name = await decentralBank.name()
      assert.equal(name, "Decentral Bank")
    })

    it("contract has tokens", async () => {
      const balance = await rwd.balanceOf(decentralBank.address)
      assert.equal(balance.toString(), tokens("1000000"))
    })
  })

  describe("Yield farming", () => {
    it("rewards tokens for staking", async () => {
      // Check initial balance before staking
      let result = await tether.balanceOf(customer)
      assert.equal(result.toString(), tokens("100"), "customer mock wallet balance before staking")

      // Approve and deposit tokens
      await tether.approve(decentralBank.address, tokens("100"), {
        from: customer,
      })
      await decentralBank.depositTokens(tokens("100"), { from: customer })

      // Check balances after staking
      result = await tether.balanceOf(customer)
      assert.equal(result.toString(), tokens("0"), "customer mock wallet balance after staking")

      result = await tether.balanceOf(decentralBank.address)
      assert.equal(result.toString(), tokens("100"), "decentral bank mock wallet balance after staking")

      result = await decentralBank.isStaking(customer)
      assert.equal(result.toString(), "true", "customer staking status to be true")

      // Issue tokens
      await decentralBank.issueTokens({ from: owner })

      // Ensure only owner can issue tokens
      try {
        await decentralBank.issueTokens({ from: customer })
        assert.fail("The transaction should have thrown an error")
      } catch (err) {
        assert.include(err.message, "Caller must be the owner", "The error message should contain 'Caller must be the owner'")
      }

      // Unstake tokens
      await decentralBank.unstakeTokens({ from: customer })

      // Check balances after unstaking
      result = await tether.balanceOf(customer)
      assert.equal(result.toString(), tokens("100"), "customer mock wallet balance after unstaking")

      result = await tether.balanceOf(decentralBank.address)
      assert.equal(result.toString(), tokens("0"), "decentral bank mock wallet balance after unstaking")

      result = await decentralBank.isStaking(customer)
      assert.equal(result.toString(), "false", "customer staking status to be false")
    })
  })
})
