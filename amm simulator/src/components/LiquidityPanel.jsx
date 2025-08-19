import React, {useState} from 'react'

const LiquidityPanel = ({}) => {
    
    const [eth , setEth] = useState("")

    const [usdc, setUsdc] = useState("")

     const addLiquidity = () => {
        const ethIn = parseFloat(eth);

        const usdcIn = parseFloat(usdc);

        if(!ethIn || !usdcIn) return;

        setReserves({eth: reserves.eth + ethIn, usdc: reserves.usdc + usdcIn})

        setLpSupply(lpSupply + ethIn)
        logEvent( `Added ${ethIn} & ${usdcIn} USDC liquidity`)

        setEth("")
        setUsdc("")
     }

  return (
     <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">Liquidity</h2>
      <input
        type="number"
        placeholder="ETH"
        value={eth}
        onChange={(e) => setEth(e.target.value)}
        className="bg-gray-700 p-2 rounded w-full mb-2"
      />
      <input
        type="number"
        placeholder="USDC"
        value={usdc}
        onChange={(e) => setUsdc(e.target.value)}
        className="bg-gray-700 p-2 rounded w-full mb-2"
      />
      <button
        onClick={addLiquidity}
        className="bg-green-500 hover:bg-green-600 p-2 rounded w-full"
      >
        Add Liquidity
      </button>
    </div>
  )
}

export default LiquidityPanel