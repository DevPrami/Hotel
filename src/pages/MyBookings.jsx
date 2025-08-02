import React, { useState } from "react";
import Title from "../components/Title";
import { assets, userBookingsDummyData } from "../assets/assets";

export default function MyBooking() {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Booking"
        subTitle="Easliy manage your past , current , and upcoming hotel reservations in onr place .
      place yourn trips seamlessy with just a new clicks."
        align="left"
      />

      <div className="max-w-8xl mt-8 w-full text-gray-800">
        <div className=" hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Timing </div>
          <div className="w-1/3">Payment</div>
        </div>

        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300
        py-6 firstr:border-t"
          >
            {/* Hotel details */}
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={booking.room.images[0]}
                alt="hotel - img"
                className="md:w-[54%] rounded shadow object-cover"
              />

              <div className="flex flex-col gap-4 max-md:mt-3 min-md:ml-4">
                <p className="text-2xl">
                  {booking.hotel.name}
                  <span className="text-sm">({booking.room.roomType})</span>
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.locationIcon} alt="location - icon" />
                  <span>{booking.hotel.address}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.guestsIcon} alt="guest-icon" />
                  <span> Guest :{booking.guests}</span>
                  
                </div>
                <p className="text-base">Total :${booking.totalPrice}</p>
              </div>
            </div>

            {/* date nd timing */}
            <div className=" flex flex-row  md:gap-12 mt-3 gap-9">
              <div>
                <p>Check-In:</p>
                <p className="text-gray-500 text-sm">{new Date(booking.checkInDate).toDateString()}</p>
              </div>

              <div>
                <p>Check-Out:</p>
                <p className="text-gray-500 text-sm">{new Date(booking.checkOutDate).toDateString()}</p>
              </div>


            </div>

            {/* Payment status */}
            <div className=" flex flex-col  pt-3">
               
               <div className=" flex items-center gap-2">
               <div className={`h-3  w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}></div>
               <p className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}>{booking.isPaid ? "Paid" : "Unpaid"}</p>
               </div>

               {!booking.isPaid && (
                <button className="p-3 w-[108px]  mt-4 text-sm  border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer">Pay Now</button>
               )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
