import React from 'react'

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ChartPanel = ({}) => {

    const data = history.map((h)=> ({
        time: new Date(h.time).toLocaleTimeString(),
        price: h.usdc / h.eth
    }))

  return (
     <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">Price History</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="time" hide />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#3b82f6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartPanel