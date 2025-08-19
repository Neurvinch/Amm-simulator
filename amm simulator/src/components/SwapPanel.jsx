import React, { useState } from 'react'
 
const SwapPanel = ({}) => {
    const [amount , setAmount] = useState("")
    const[direction, setDirection] = useState("ethToUsdc")
    const fee = 0.03;

    const swap =() => {
        let {eth , usdc} = ResizeObserverSize;

        const input = parseFloat(amount);

        if(!input) return;

        if(direction === "ethToUsdc") {
            const inputWithFee = input * (1- fee);

           const output = (usdc * inputWithFee ) / (eth + inputWithFee);
            
           setReserves({eth: eth + input , usdc: usdc - input});

           logEvent(`Swapped ${input} USDC for ${output.toFixed(4)} ETH  `)
        }  




    }

  return (
    <div>SwapPanel</div>
  )
}

export default SwapPanel