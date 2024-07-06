import React, { useState, useEffect, useRef, useCallback } from "react"
import "./Airdrop.scss"

interface AirdropProps {
  stakingBalance: string
}

interface Time {
  h: number
  m: number
  s: number
}

const Airdrop: React.FC<AirdropProps> = ({ stakingBalance }) => {
  const [time, setTime] = useState<Time>({ h: 0, m: 0, s: 20 })
  const [seconds, setSeconds] = useState<number>(20)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const secondsToTime = (secs: number): Time => {
    const hours = Math.floor(secs / (60 * 60))
    const divisorForMinutes = secs % (60 * 60)
    const minutes = Math.floor(divisorForMinutes / 60)
    const divisorForSeconds = divisorForMinutes % 60
    const seconds = Math.ceil(divisorForSeconds)

    return {
      h: hours,
      m: minutes,
      s: seconds,
    }
  }

  const countDown = useCallback(() => {
    setSeconds((prevSeconds) => {
      const newSeconds = prevSeconds - 1
      setTime(secondsToTime(newSeconds))
      if (newSeconds === 0 && timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
      return newSeconds
    })
  }, [])

  const startTimer = useCallback(() => {
    if (timerRef.current === null && seconds > 0) {
      timerRef.current = setInterval(countDown, 1000)
    }
  }, [seconds, countDown])

  useEffect(() => {
    const timeLeftVar = secondsToTime(seconds)
    setTime(timeLeftVar)
  }, [seconds])

  useEffect(() => {
    const airdropReleaseTokens = () => {
      if (parseFloat(stakingBalance) >= 50) {
        startTimer()
      }
    }

    airdropReleaseTokens()
  }, [stakingBalance, startTimer])

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  return (
    <div className="airdrop">
      {time.m}:{time.s}
    </div>
  )
}

export default Airdrop
