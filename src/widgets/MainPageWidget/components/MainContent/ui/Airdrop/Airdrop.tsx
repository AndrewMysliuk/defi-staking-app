import { FC, useCallback, useEffect } from "react"
import "./Airdrop.scss"
import { Contract, ContractAbi } from "web3"
import { useTypedSelector, useTimer } from "@/shared/hooks"
// import { giveRewardForUser } from "@/shared/api"

interface AirdropProps {
  decentralBankContract: Contract<ContractAbi> | null
}

const Airdrop: FC<AirdropProps> = ({ decentralBankContract }) => {
  const { stakingBalance } = useTypedSelector((state) => state.banking)
  const { time, startTimer, resetTimer } = useTimer(20)

  const handleReward = useCallback(() => {
    if (decentralBankContract) {
      // giveRewardForUser(decentralBankContract)
      console.log("TODO Rewards")
    }
    resetTimer()
  }, [decentralBankContract, resetTimer])

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
