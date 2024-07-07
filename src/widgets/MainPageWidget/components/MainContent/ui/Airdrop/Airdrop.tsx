import { FC, useCallback, useEffect } from "react"
import "./Airdrop.scss"
import Web3, { Contract, ContractAbi } from "web3"
import { useTypedSelector, useTimer } from "@/shared/hooks"
import { giveRewardForUser } from "@/shared/api"

interface AirdropProps {
  decentralBankContract: Contract<ContractAbi> | null
  web3Instance: Web3 | null
}

const Airdrop: FC<AirdropProps> = ({ decentralBankContract, web3Instance }) => {
  const { accountValue, stakingBalance } = useTypedSelector((state) => state.banking)
  const { time, startTimer, resetTimer } = useTimer(20)

  const handleReward = useCallback(() => {
    if (decentralBankContract && web3Instance) {
      giveRewardForUser(web3Instance, decentralBankContract, accountValue)
    }
    resetTimer()
    startTimer()
  }, [decentralBankContract, resetTimer, startTimer, accountValue, web3Instance])

  useEffect(() => {
    if (parseFloat(stakingBalance) >= 50) {
      startTimer()
    } else {
      resetTimer()
    }
  }, [stakingBalance, startTimer, resetTimer])

  useEffect(() => {
    if (time.m === 0 && time.s === 0) {
      handleReward()
    }
  }, [time, handleReward])

  return (
    <div className="airdrop">
      {time.m}:{time.s}
    </div>
  )
}

export default Airdrop
