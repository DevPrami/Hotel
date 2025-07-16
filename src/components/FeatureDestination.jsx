import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'

export default function FeatureDestination() {
  return (
    <div className="px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <div className="  [flex-wrap:revert] justify-center md:justify-between items-center gap-6 mt-20 w-full md:flex">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
    </div>
  )
}
