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

      assert.equal(balance, tokens("1000000"))
    })
  })
})
