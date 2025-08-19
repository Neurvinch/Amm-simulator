import React from 'react'

const PoolInfo = ({reserves, lpSupply}) => {

    const price = reserves.usdc / reserves.eth
    const  k = reserves.eth * reserves.usdc

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">Pool Info</h2>
      <p>Reserves: {reserves.eth.toFixed(2)} ETH | {reserves.usdc.toFixed(2)} USDC</p>
      <p>Price: 1 ETH = {price.toFixed(2)} USDC</p>
      <p>Invariant (k): {k.toFixed(2)}</p>
      <p>LP Supply: {lpSupply}</p>
    </div>
  )
}

export default PoolInfo