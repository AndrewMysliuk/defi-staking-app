import { useCallback, useEffect, useState } from "react"
import "./MainPageWidget.scss"
import Web3, { Contract, ContractAbi } from "web3"
import { initWeb3 } from "@/shared/plugins"
import { TheNavbar } from "@/shared/components"
import type {
  ITetherContract,
  IRWDContract,
  IDecentralBankContract,
} from "@/shared/types"
import Tether from "@/truffle_abis/Tether.json"
import RWD from "@/truffle_abis/RWD.json"
import DecentralBank from "@/truffle_abis/DecentralBank.json"

const MainPageWidget = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [accountValue, setAccountValue] = useState<string>("")
  const [tetherBalance, setTetherBalance] = useState<string>("0")
  const [rwdBalance, setRwdBalance] = useState<string>("0")
  const [stakingBalance, setStakingBalance] = useState<string>("0")
  const [tether, setTether] = useState<Contract<ContractAbi> | null>(null)
  const [rwd, setRwd] = useState<Contract<ContractAbi> | null>(null)
  const [decentralBank, setDecentralBank] =
    useState<Contract<ContractAbi> | null>(null)

  const initBlockChainData = async (web3: Web3 | null) => {
    if (web3) {
      const accounts = await web3.eth.getAccounts()
      console.log("MetaMask Accounts: ", accounts)

      if (accounts.length) {
        setAccountValue(accounts[0])
      }

      const networkId = String(await web3.eth.net.getId())

      // Load Tether Contract
      const tetherData = (Tether as ITetherContract).networks[networkId]

      if (tetherData) {
        const tetherContract = new web3.eth.Contract(
          Tether.abi,
          tetherData.address
        )
        setTether(tetherContract)
        const tetherBal = (await tetherContract.methods
          .balanceOf(accounts[0])
          .call()) as string
        setTetherBalance(tetherBal.toString())
      } else {
        console.error("Tether contract not deployed to detect network")
      }

      // Load RWD Contract
      const rwdData = (RWD as IRWDContract).networks[networkId]

      if (rwdData) {
        const rwdContract = new web3.eth.Contract(RWD.abi, rwdData.address)
        setRwd(rwdContract)
        const rwdBal = (await rwdContract.methods
          .balanceOf(accounts[0])
          .call()) as string
        setTetherBalance(rwdBal.toString())
      } else {
        console.error("RWD contract not deployed to detect network")
      }

      //Load DecentralBank
      const decentralBankData = (DecentralBank as IDecentralBankContract)
        .networks[networkId]
      if (decentralBankData) {
        const decentralBank = new web3.eth.Contract(
          DecentralBank.abi,
          decentralBankData.address
        )
        setDecentralBank(decentralBank)
        const stakingBalance = (await decentralBank.methods
          .stakingBalance(accounts[0])
          .call()) as string
        setStakingBalance(stakingBalance.toString())
      } else {
        console.error("TokenForm contract not deployed to detect network")
      }

      setIsLoading(false)
    }
  }

  const init = useCallback(async () => {
    const web3Instance = await initWeb3()
    console.log("Web 3 Instance: ", web3Instance)

    await initBlockChainData(web3Instance)
  }, [])

  useEffect(() => {
    init()
  }, [init])

  return (
    <div className="main-page-widget">
      {isLoading && <TheNavbar account={accountValue} />}

      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, illo ut
        dolore, nam esse consectetur animi aliquam aspernatur odit,
        exercitationem tempore eos suscipit hic voluptatem. Fugiat sint nisi at
        consectetur.
      </p>
    </div>
  )
}

export default MainPageWidget
