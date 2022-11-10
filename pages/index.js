import Head from 'next/head'
import Image from 'next/image'

import Timer from '../components/Timer'
import Tracker from '../components/Tracker'
import Counter from '../components/Counter'

export default function Home() {
  return (
    <div>
      <Tracker/>
      <Timer/>
    </div>    
  )
}
