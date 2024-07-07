import { useState, useRef, useCallback, useEffect } from "react"
import { secondsToTime } from "@/shared/utils"
import { ITime } from "@/shared/types"

export const useTimer = (initialSeconds: number) => {
  const [time, setTime] = useState<ITime>(secondsToTime(initialSeconds))
  const [, setSeconds] = useState<number>(initialSeconds)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const countDown = useCallback(() => {
    setSeconds((prevSeconds) => {
      const newSeconds = prevSeconds - 1
      if (newSeconds >= 0) {
        setTime(secondsToTime(newSeconds))
      } else {
        clearInterval(timerRef.current!)
        timerRef.current = null
      }
      return newSeconds
    })
  }, [])

  const startTimer = useCallback(() => {
    if (timerRef.current === null) {
      timerRef.current = setInterval(countDown, 1000)
    }
  }, [countDown])

  const resetTimer = useCallback(() => {
    setSeconds(initialSeconds)
    setTime(secondsToTime(initialSeconds))
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [initialSeconds])

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  return { time, startTimer, resetTimer }
}
