import { FC, useState } from "react"
import "./MainContent.scss"
import Web3, { Contract, ContractAbi } from "web3"
import { stakeTokensOnDecentralBank, unstakeTokensFromDecentralBank } from "@/shared/api"
import { useActions, useTypedSelector } from "@/shared/hooks"
import { Airdrop } from "./ui"

interface MainContentProps {
  tetherContract: Contract<ContractAbi> | null
  decentralBankContract: Contract<ContractAbi> | null
}

const MainContent: FC<MainContentProps> = ({ tetherContract, decentralBankContract }) => {
  const { accountValue, tetherBalance, rwdBalance, stakingBalance } = useTypedSelector((state) => state.banking)
  const { setIsLoading } = useActions()

  const [inputValue, setInputValue] = useState<string>("")

  const depositHandler = async () => {
    try {
      setIsLoading(true)

      await stakeTokensOnDecentralBank(tetherContract, decentralBankContract, accountValue, Web3.utils.toWei(inputValue, "ether"))
    } catch (error) {
      console.error("Error in stakeTokens:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const withdrawHandler = async () => {
    try {
      setIsLoading(true)

      await unstakeTokensFromDecentralBank(decentralBankContract, accountValue)
    } catch (error) {
      console.error("Error in unstakeTokens:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div id="content" className="mt-3">
      <div className="main-content__block">
        <div className="main-content__block-row">
          <div className="main-content__block-col">Staking Balance</div>
          <div className="main-content__block-col">Reward Balance</div>
        </div>
        <div className="main-content__block-row">
          <div className="main-content__block-col">{Web3.utils.fromWei(Number(stakingBalance), "ether")} USDT</div>
          <div className="main-content__block-col">{Web3.utils.fromWei(Number(rwdBalance), "ether")} RWD</div>
        </div>
      </div>
      <div className="main-content__card card mb-2">
        <form className="main-content__form mb-3">
          <div className="main-content__form-wrapper">
            <label className="main-content__form-label float-start mb-3">
              <b>Stake Tokens</b>
            </label>
            <span className="main-content__form-balance float-end mb-3">Balance: {Web3.utils.fromWei(Number(tetherBalance), "ether")}</span>
            <div className="input-group mb-4">
              <input type="text" className="form-control" placeholder="0" required value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
              <div className="input-group-append">
                <div className="input-group-text">USDT</div>
              </div>
            </div>
            <button onClick={depositHandler} type="button" className="btn btn-primary btn-lg w-100">
              DEPOSIT
            </button>
          </div>
        </form>
        <button onClick={withdrawHandler} type="button" className="btn btn-primary btn-lg w-100">
          WITHDRAW
        </button>
        <div className="main-content__airdrop card-body text-center" style={{ color: "blue" }}>
          AIRDROP
          <Airdrop />
        </div>
      </div>
    </div>
  )
}

export default MainContent
