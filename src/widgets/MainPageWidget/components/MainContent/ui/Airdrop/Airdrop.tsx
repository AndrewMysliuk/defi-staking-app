import { useEffect } from "react"
import "./Airdrop.scss"
import { useTypedSelector, useTimer } from "@/shared/hooks"

const Airdrop = () => {
  const { stakingBalance } = useTypedSelector((state) => state.banking)
  const { time, startTimer, resetTimer } = useTimer(20)

  useEffect(() => {
    if (parseFloat(stakingBalance) >= 50) {
      startTimer()
    } else {
      resetTimer()
    }
  }, [stakingBalance, startTimer, resetTimer])

  return (
    <div className="airdrop">
      {time.m}:{time.s}
    </div>
  )
}

export default Airdrop
