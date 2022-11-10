import React, {useState, useEffect} from 'react'
import Intervals from './Intervals'

const Timer = () => {
    const [timer, setTimer] = useState(0)
    const [minute, setMinute] = useState(0)

    useEffect(() => {

        if (timer >= 1) {
            setMinute(minute + 1)
            setTimer(0)
        }

        const interval = setInterval(() => {
            return setTimer((prevTimer) => prevTimer + 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [timer])

  return (
    <div>
        <Intervals timer={timer} minute={minute} />
    </div>
  )
}

export default Timer