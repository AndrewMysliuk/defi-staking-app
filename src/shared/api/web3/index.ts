import Web3, { Contract, ContractAbi } from "web3"
import type { ITetherContract, IRWDContract, IDecentralBankContract } from "@/shared/types"
import Tether from "@/truffle_abis/Tether.json"
import RWD from "@/truffle_abis/RWD.json"
import DecentralBank from "@/truffle_abis/DecentralBank.json"

// Get Accounts
export const getAccounts = async (web3: Web3) => {
  try {
    const accounts = await web3.eth.getAccounts()

    return accounts?.[0] ?? ""
  } catch (error: unknown) {
    throw error
  }
}

// Get Network ID
export const getNetworkId = async (web3: Web3) => {
  return String(await web3.eth.net.getId())
}

// Get Tether Contract
export const getTetherContract = async (web3: Web3, networkId: string, account: string) => {
  try {
    const tetherData = (Tether as ITetherContract).networks[networkId]
    const tetherContract = new web3.eth.Contract(Tether.abi, tetherData.address)
    const tetherBal = (await tetherContract.methods.balanceOf(account).call()) as string

    return { tetherContract, tetherBal }
  } catch (error: unknown) {
    throw error
  }
}

// Get RWD Contract
export const getRwdContract = async (web3: Web3, networkId: string, account: string) => {
  try {
    const rwdData = (RWD as IRWDContract).networks[networkId]
    const rwdContract = new web3.eth.Contract(RWD.abi, rwdData.address)
    const rwdBal = (await rwdContract.methods.balanceOf(account).call()) as string

    return { rwdContract, rwdBal }
  } catch (error: unknown) {
    throw error
  }
}

// Get Decentral Bank Contract
export const getDecentralBankContract = async (web3: Web3, networkId: string, account: string) => {
  try {
    const decentralBankData = (DecentralBank as IDecentralBankContract).networks[networkId]
    const decentralBankContract = new web3.eth.Contract(DecentralBank.abi, decentralBankData.address)
    const stakingBalance = (await decentralBankContract.methods.stakingBalance(account).call()) as string

    return { decentralBankContract, stakingBalance }
  } catch (error: unknown) {
    throw error
  }
}

// Stake Tokens On Decentral Bank
export const stakeTokensOnDecentralBank = async (
  tether_contract: Contract<ContractAbi> | null,
  decentral_bank_contract: Contract<ContractAbi> | null,
  account_value: string,
  amount: string
) => {
  try {
    // Approve txn
    const approveReceipt = await tether_contract?.methods.approve(decentral_bank_contract?.options?.address, amount).send({ from: account_value })

    if (approveReceipt) console.log("Approve transaction hash:", approveReceipt.transactionHash)

    // Tokens Deposit
    const depositReceipt = await decentral_bank_contract?.methods.depositTokens(amount).send({ from: account_value })

    if (depositReceipt) console.log("Deposit transaction hash:", depositReceipt.transactionHash)
  } catch (error: unknown) {
    throw error
  }
}

// Unstake Tokens From Decentral Bank
export const unstakeTokensFromDecentralBank = async (decentral_bank_contract: Contract<ContractAbi> | null, account_value: string) => {
  try {
    // Unstake Tokens
    const unstakeReceipt = await decentral_bank_contract?.methods.unstakeTokens().send({ from: account_value })

    if (unstakeReceipt) console.log("Unstake transaction hash:", unstakeReceipt.transactionHash)
  } catch (error: unknown) {
    throw error
  }
}
