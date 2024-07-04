import { FC } from "react"
import "./MainContent.scss"
import { Contract, ContractAbi } from "web3"

interface MainContentProps {
  tetherBalance: string
  rwdBalance: string
  stakingBalance: string
  decentralBankContract: Contract<ContractAbi> | null
}

const MainContent: FC<MainContentProps> = ({
  tetherBalance,
  rwdBalance,
  stakingBalance,
  decentralBankContract,
}) => {
  return (
    <div id="content" className="mt-3">
      <table className="table text-muted text-center">
        <thead>
          <tr>
            <th scope="col">Staking Balance</th>
            <th scope="col">Reward Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USDT</td>
            <td>RWD</td>
          </tr>
        </tbody>
      </table>
      <div className="main-content__card card mb-2">
        <form className="main-content__form mb-3">
          <div className="main-content__form-wrapper">
            <label className="main-content__form-label float-start">
              <b>Stake Tokens</b>
            </label>
            <span className="main-content__form-balance float-end">
              Balance:
            </span>
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="0"
                required
              />
              <div className="input-group-append">
                <div className="input-group-text">USDT</div>
              </div>
            </div>
            <button type="button" className="btn btn-primary btn-lg w-100">
              DEPOSIT
            </button>
          </div>
        </form>
        <button type="button" className="btn btn-primary btn-lg w-100">
          WITHDRAW
        </button>
        <div
          className="main-content__airdrop card-body text-center"
          style={{ color: "blue" }}
        >
          AIRDROP
          {/* <Airdrop
      stakingBalance={this.props.stakingBalance}
      decentralBankContract={this.props.decentralBankContract}
    /> */}
        </div>
      </div>
    </div>
  )
}

export default MainContent
