import React, {useState, useEffect} from 'react'
import Graph from './Graph';
import Intervals from './Intervals'


const Counter = (props) => {
    const [count, setCount] = useState(0);
    const [timeArray, setTimeArray] = useState([]);
    const [countArray, setCountArray] = useState([]);
    const [stowData, setStowData] = useState([]);
    const [average, setAverage] = useState(0);
    const [show, setShow] = useState(false);

    const {minute, half, hour} = props;

    const increaseCount = () => {
        setCount(count + 1)
    }

    const dataStore = (a) => {

      const data = new Object();

      data.id = timeArray.length;
      data.stow = a;
      setAverage(a)

      stowData.push(data)
    }

    const calcAverage = () => {
      
        let time = 1;
        timeArray.push(time)
        countArray.push(count)
        const sum = countArray.reduce((partialSum, a) => partialSum + a, 0);
        const timeCount = timeArray.length;
        const average = Math.floor(sum / timeCount)
        setCount(0)
        dataStore(average)
         
    }

    const perHour = () => {
      console.log("calculate hour")
    }

    useEffect(() => {
      if(half === 0 && hour === 0) {
        
      } else {
        calcAverage(half)
      }            
    },[half, hour])


    return (
      <div className='h-screen bg-slate-400'>
        <div className="h-full flex flex-col items-center justify-center bg-blue-200">
          <p className='text-center uppercase mb-3'>tap below to simulate a stow</p>
          <div>
            <button className='mt-2 bg-slate-400 px-2 py-1 rounded-sm shadow-md active:bg-black active:text-white' onClick={increaseCount}>Stow</button>
          </div>          
        </div>
        {/* stow rate */}
        <div className='h-28 pt-3 rounded-t-xl bg-slate-100 w-full fixed bottom-0'>
          
          <div className='w-full  justify-center flex flex-col items-center '>
          <div  className='w-10 bg-black h-3 mt-1 rounded-md mb-3'></div>
            <div>
              Stow Rate
            </div>
            <div>
              {average}
            </div>             
          </div>          
        </div>
          
          
      </div>
    )
}

export default Counter