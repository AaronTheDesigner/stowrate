import React, {useState, useEffect} from 'react'
import Counter from './Counter';

const Intervals = (props) => {
    //const [minute, setMinute] = useState(0)
    const [half, setHalf] = useState(0)
    const [hour, setHour] = useState(0)

    const {minute} = props;

   const setIntervals = () => {

    const whole = minute / 30
    const sixty = whole / 2
    
    if (Number.isInteger(whole) && whole > 0) {
        setHalf(whole)
    }

    if (Number.isInteger(sixty) && sixty > 0) {
        setHour(sixty)
    }
   }


    useEffect(() => {
        setIntervals();

        
    }, [minute])

  return (
    <div>
        <div className="flex justify-between bg-black text-white text-xs">
            <div id="title" className="ml-2">Intervals</div>
            <div className="flex">
                <div className='mr-2'>
                    minute:  {minute}
                </div>
                <div className='mr-2'>
                    half:  {half} 
                </div>
                <div className='mr-2'>
                    hour:  {hour}
                </div>           
                
                 
            </div>
        </div>
        <Counter minute={minute} half={half} hour={hour} />

    </div>
  )
}

export default Intervals