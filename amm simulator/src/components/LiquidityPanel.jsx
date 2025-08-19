import React, {useState} from 'react'

const LiquidityPanel = ({}) => {
    
    const [eth , setEth] = useState("")

    const [usdc, setUsdc] = useState("")

     const addLiquity = () => {
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
    <div>LiquidityPanel</div>
  )
}

export default LiquidityPanel