
import { useState } from 'react'
import './App.css'
import SwapPanel from './components/SwapPanel';
import LiquidityPanel from './components/LiquidityPanel';
import PoolInfo from './components/PoolInfo';
import EventLog from './components/EventLog';
import ChartPanel from './components/ChartPanel';

function App() {
  
    const [reserves , setReserves] = useState({eth: 100, usdc:2000});
    const [lpSupply, setLpSupply] = useState(100);
    const [events, setEvents] = useState([]);
    const [history, setHistory] = useState([]);
     
      const logEvent = (msg) => {
         setEvents((prev) => [msg, ...prev]);
         setHistory( () => [
          ...prev,
          {time: Date.now(), eth: reserves.eth, usdc: reserves.usdc} ])
      }

  return (
      <div className="min-h-screen p-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="col-span-2 space-y-4">
        <SwapPanel
          reserves={reserves}
          setReserves={setReserves}
          logEvent={logEvent}
        />
        <LiquidityPanel
          reserves={reserves}
          setReserves={setReserves}
          lpSupply={lpSupply}
          setLpSupply={setLpSupply}
          logEvent={logEvent}
        />
        <PoolInfo reserves={reserves} lpSupply={lpSupply} />
      </div>
      <div className="space-y-4">
        <EventLog events={events} />
        <ChartPanel history={history} />
      </div>
    </div>
  )
}

export default App
