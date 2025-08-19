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

           logEvent(`Swapped ${input} ETH for ${output.toFixed(4)} USDC  `)
        }   else {

            const inputWithFee = input * (1 - fee);

            const output = (eth * inputWithFee) / (
                usdc + inputWithFee
            ) 

            setReserves({eth: eth - output, usdc: usdc + input})
       

        logEvent(`Swapped ${input} USDC for ${output.toFixed(4)} ETH`)
     }

    setAmount("")
    }


    

  return (
    <div>SwapPanel</div>
  )

}

export default SwapPanel