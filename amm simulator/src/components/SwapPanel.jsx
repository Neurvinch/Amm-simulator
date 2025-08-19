import React, { useState } from 'react'
 
const SwapPanel = ({}) => {
    const [amount , setAmount] = useState("")
    const[direction, setDirection] = useState("ethToUsdc")
    const fee = 0.03;

    const swap =() => {
        
    }

  return (
    <div>SwapPanel</div>
  )
}

export default SwapPanel