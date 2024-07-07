import Web3 from "web3"
import { AppDispatch } from "@/shared/store"
import { allActionCreators } from "@/shared/store/reducers/action-creator"
import { getAccounts, getNetworkId, getTetherContract, getRwdContract, getDecentralBankContract } from "@/shared/api"

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

export const initBlockChainData = async (web3: Web3, dispatch: AppDispatch) => {
  try {
    const account = await getAccounts(web3)
    const networkId = await getNetworkId(web3)

    const { tetherContract, tetherBal } = await getTetherContract(web3, networkId, account)

    const { rwdContract, rwdBal } = await getRwdContract(web3, networkId, account)

    const { decentralBankContract, stakingBalance } = await getDecentralBankContract(web3, networkId, account)

    dispatch(allActionCreators.setAccountValue(account))
    dispatch(allActionCreators.setTetherBalance(tetherBal.toString()))
    dispatch(allActionCreators.setRwdBalance(rwdBal.toString()))
    dispatch(allActionCreators.setStakingBalance(stakingBalance.toString()))

    // Tether Contract Events
    tetherContract.events.Transfer({ filter: { to: account } }).on("data", (event) => {
      const newBalance = event.returnValues.value as string
      dispatch(allActionCreators.setTetherBalance(newBalance.toString()))
    })

    // RWD Contract Events
    rwdContract.events.Transfer({ filter: { to: account } }).on("data", (event) => {
      const newBalance = event.returnValues.value as string
      dispatch(allActionCreators.setRwdBalance(newBalance.toString()))
    })

    // Decentral Bank Contract Events
    decentralBankContract.events.Deposit({ filter: { user: account } }).on("data", (event) => {
      const newBalance = event.returnValues.amount as string
      dispatch(allActionCreators.setStakingBalance(newBalance.toString()))
    })

    decentralBankContract.events.Unstake({ filter: { user: account } }).on("data", (event) => {
      const newBalance = event.returnValues.amount as string
      dispatch(allActionCreators.setStakingBalance(newBalance.toString()))
    })

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
