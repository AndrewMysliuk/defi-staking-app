import { useState, useRef, useCallback, useEffect } from "react"
import { secondsToTime } from "@/shared/utils"
import { ITime } from "@/shared/types"

export const useTimer = (initialSeconds: number) => {
  const [time, setTime] = useState<ITime>(secondsToTime(initialSeconds))
  const [seconds, setSeconds] = useState<number>(initialSeconds)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const countDown = useCallback(() => {
    setSeconds((prevSeconds) => {
      const newSeconds = prevSeconds - 1
      setTime(secondsToTime(newSeconds))
      if (newSeconds <= 0 && timerRef.current) {
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
    setTime(secondsToTime(seconds))
  }, [seconds])

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  return { time, startTimer, resetTimer: () => setSeconds(initialSeconds) }
}
