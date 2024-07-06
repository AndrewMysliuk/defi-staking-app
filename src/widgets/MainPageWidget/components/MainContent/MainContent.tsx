import { FC, useState } from "react"
import "./MainContent.scss"
import Web3 from "web3"
import { useTypedSelector } from "@/shared/hooks"
import { Airdrop } from "./ui"

interface MainContentProps {
  stakeTokens: (amount: string) => void
  unstakeTokens: () => void
}

const MainContent: FC<MainContentProps> = ({ stakeTokens, unstakeTokens }) => {
  const { tetherBalance, rwdBalance, stakingBalance } = useTypedSelector((state) => state.banking)
  const [inputValue, setInputValue] = useState<string>("")

  const depositHandler = () => {
    stakeTokens(Web3.utils.toWei(inputValue, "ether"))
  }

  const withdrawHandler = () => {
    unstakeTokens()
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
          <Airdrop stakingBalance={stakingBalance} />
        </div>
      </div>
    </div>
  )
}

export default MainContent
