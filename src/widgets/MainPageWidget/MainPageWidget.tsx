import { useCallback, useEffect, useState } from "react"
import "./MainPageWidget.scss"
import { Contract, ContractAbi } from "web3"
import { initBlockchain } from "@/shared/plugins"
import { useTypedSelector, useAppDispatch } from "@/shared/hooks"
import { TheNavbar } from "@/shared/components"
import { MainContent, ParticleSettings } from "./components"

const MainPageWidget = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useTypedSelector((state) => state.common)

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

  return (
    <div className="main-page-widget">
      <ParticleSettings />

      <TheNavbar />

      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <main role="main" className="main-page-widget__main col-lg-12 col-md-10 col-sm-12">
            <div>
              {isLoading ? (
                <p className="text-center">Loading</p>
              ) : (
                <MainContent tetherContract={tetherContract} decentralBankContract={decentralBankContract} />
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default MainPageWidget
