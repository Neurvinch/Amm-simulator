import React from 'react'

const EventLog = ({events}) => {
  return (
     <div className="bg-gray-800 p-4 rounded-xl shadow-lg max-h-60 overflow-y-auto">
      <h2 className="text-xl font-bold mb-2">Event Log</h2>
      <ul className="space-y-1">
        {events.map((e, i) => (
          <li key={i} className="text-sm text-gray-300">• {e}</li>
        ))}
      </ul>
    </div>
  )
}

export default EventLog