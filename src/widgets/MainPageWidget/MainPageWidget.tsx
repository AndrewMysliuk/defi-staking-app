import { useCallback, useEffect, useState } from "react"
import "./MainPageWidget.scss"
import Web3 from "web3"
import { initWeb3 } from "@/shared/plugins"
import { TheNavbar } from "@/shared/components"

const MainPageWidget = () => {
  const [accountValue, setAccountValue] = useState<string>("")

  const initBlockChainData = async (web3: Web3 | null) => {
    if (web3) {
      const accounts = await web3.eth.getAccounts()
      console.log("MetaMask Accounts: ", accounts)

      if (accounts.length) {
        setAccountValue(accounts[0])
      }
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
      <TheNavbar account={accountValue} />

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
