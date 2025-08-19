import React, { useState } from 'react'
 
const SwapPanel = ({ reserves, setReserves, logEvent}) => {
    const [amount , setAmount] = useState("")
    const[direction, setDirection] = useState("ethToUsdc")
    const fee = 0.03;

    const swap =() => {
        let {eth , usdc} = reserves;

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
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">Swap</h2>
      <select
        value={direction}
        onChange={(e) => setDirection(e.target.value)}
        className="bg-gray-700 p-2 rounded w-full mb-2"
      >
        <option value="ethToUsdc">ETH → USDC</option>
        <option value="usdcToEth">USDC → ETH</option>
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="bg-gray-700 p-2 rounded w-full mb-2"
      />
      <button
        onClick={swap}
        className="bg-blue-500 hover:bg-blue-600 p-2 rounded w-full"
      >
        Swap
      </button>
    </div>
  )

}

export default SwapPanel