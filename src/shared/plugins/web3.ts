import Web3 from "web3"

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
