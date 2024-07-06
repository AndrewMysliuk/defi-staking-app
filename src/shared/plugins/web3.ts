import Web3 from "web3"
import { AppDispatch } from "../store"
import { allActionCreators } from "@/shared/store/reducers/action-creator"
import type { ITetherContract, IRWDContract, IDecentralBankContract } from "@/shared/types"
import Tether from "@/truffle_abis/Tether.json"
import RWD from "@/truffle_abis/RWD.json"
import DecentralBank from "@/truffle_abis/DecentralBank.json"

declare global {
  interface Window {
    ethereum?: any
    web3?: any
  }
}

export const initWeb3 = async (): Promise<Web3 | null> => {
  if (window.ethereum) {
    const web3Instance = new Web3(window.ethereum)
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" })
      return web3Instance
    } catch (error) {
      console.error("User denied account access")
      return null
    }
  } else if (window.web3) {
    return new Web3(window.web3.currentProvider)
  } else {
    window.alert("Non ethereum browser detected. You should consider Metamask!")
    return null
  }
}

export const getAccounts = async (web3: Web3) => {
  try {
    const accounts = await web3.eth.getAccounts()

    return accounts?.[0] ?? ""
  } catch (error: unknown) {
    throw error
  }
}

export const getNetworkId = async (web3: Web3) => {
  return String(await web3.eth.net.getId())
}

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

export const initBlockChainData = async (web3: Web3, dispatch: AppDispatch) => {
  try {
    const account = await getAccounts(web3)
    const networkId = await getNetworkId(web3)

    const { tetherContract, tetherBal } = await getTetherContract(web3, networkId, account)

    const { rwdContract, rwdBal } = await getRwdContract(web3, networkId, account)

    const { decentralBankContract, stakingBalance } = await getDecentralBankContract(web3, networkId, account)

    dispatch(allActionCreators.setTetherBalance(tetherBal.toString()))
    dispatch(allActionCreators.setRwdBalance(rwdBal.toString()))
    dispatch(allActionCreators.setStakingBalance(stakingBalance.toString()))

    return { tetherContract, rwdContract, decentralBankContract }
  } catch (error: unknown) {
    throw error
  }
}

export const initBlockchain = async (dispatch: AppDispatch) => {
  try {
    const web3Instance = await initWeb3()

    if (web3Instance) {
      const { tetherContract, rwdContract, decentralBankContract } = await initBlockChainData(web3Instance, dispatch)

      return { tetherContract, rwdContract, decentralBankContract }
    }
  } catch (error: unknown) {
    console.log("Web3 Initialization Error: ", error)
  } finally {
    dispatch(allActionCreators.setIsLoading(false))
  }
}
