import { useCallback, useEffect, useState } from "react"
import "./MainPageWidget.scss"
import { Contract, ContractAbi } from "web3"
import { initBlockchain } from "@/shared/plugins"
import { useActions, useTypedSelector, useAppDispatch } from "@/shared/hooks"
import { TheNavbar } from "@/shared/components"
import { MainContent, ParticleSettings } from "./components"

const MainPageWidget = () => {
  const dispatch = useAppDispatch()
  const { accountValue } = useTypedSelector((state) => state.banking)
  const { isLoading } = useTypedSelector((state) => state.common)
  const { setIsLoading } = useActions()

  const [tetherContract, setTetherContract] = useState<Contract<ContractAbi> | null>(null)
  const [rwdContract, setRwdContract] = useState<Contract<ContractAbi> | null>(null)
  const [decentralBankContract, setDecentralBankContract] = useState<Contract<ContractAbi> | null>(null)

  const initializeBlockchain = useCallback(async () => {
    const contracts = await initBlockchain(dispatch)

    if (contracts) {
      setTetherContract(contracts.tetherContract)
      setRwdContract(contracts.rwdContract)
      setDecentralBankContract(contracts.decentralBankContract)
    }
  }, [dispatch])

  useEffect(() => {
    initializeBlockchain()
  }, [initializeBlockchain])

  const stakeTokens = async (amount: string) => {
    try {
      setIsLoading(true)

      // Approve txn
      const approveReceipt = await tetherContract?.methods.approve(decentralBankContract?.options?.address, amount).send({ from: accountValue })

      if (approveReceipt) console.log("Approve transaction hash:", approveReceipt.transactionHash)

      // Tokens Deposit
      const depositReceipt = await decentralBankContract?.methods.depositTokens(amount).send({ from: accountValue })

      if (depositReceipt) console.log("Deposit transaction hash:", depositReceipt.transactionHash)
    } catch (error) {
      console.error("Error in stakeTokens:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const unstakeTokens = async () => {
    try {
      setIsLoading(true)

      // Unstake Tokens
      const unstakeReceipt = await decentralBankContract?.methods.unstakeTokens().send({ from: accountValue })

      if (unstakeReceipt) console.log("Unstake transaction hash:", unstakeReceipt.transactionHash)
    } catch (error) {
      console.error("Error in unstakeTokens:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="main-page-widget">
      <ParticleSettings />

      <TheNavbar account={accountValue} />

      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <main role="main" className="main-page-widget__main col-lg-12 col-md-10 col-sm-12">
            <div>{isLoading ? <p className="text-center">Loading</p> : <MainContent stakeTokens={stakeTokens} unstakeTokens={unstakeTokens} />}</div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default MainPageWidget
