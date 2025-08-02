import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRateing from "../components/StarRateing";

export default function RoomDetails() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, [id]);

  return (
    room && (
      <div className="  py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Room DETAILS */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl ">
            {room.hotel.name}
            <span className="font-inter text-sm">({room.roomType})</span>
          </h1>
          <p className="text-sm py-1.5 px-3 text-white bg-orange-500 rounded-full">
            20% Off
          </p>
        </div>
        {/* Room Rating */}

        <div className="flex items-center gap-1 mt-2">
          <StarRateing />
          <p className="ml-2">200+ reviews </p>
        </div>

        {/* Room Address */}
        <div className=" flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="locationIcon" />
          <span>{room.hotel.address}</span>
        </div>

        {/* Room Images */}

        <div className=" flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              className="w-full rounded-xl shadow-lg object-cover"
              src={mainImage}
              alt="Room Image"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  onClick={() => setMainImage(image)}
                  key={index}
                  src={image}
                  alt="Room Image"
                  className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${
                    mainImage === image && "outline-3 outline-orange-500"
                  }`}
                />
              ))}
          </div>
        </div>

        {/* Room Highlight */}

        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl ">
              Experience Luxury Like Never Before
            </h1>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
                >
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="w-5 h-5"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Room Pricee */}
          <p className="text-2xl font-medium">${room.pricePerNight}/night</p>
        </div>

        {/* Check in out */}

        <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
          <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
            <div className="flex flex-col">
              <label htmlFor="checkInDate" className="font-medium">
                {" "}
                Check In
              </label>
              <input
                type="date"
                id="checkInDate"
                placeholder="check-In"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="checkOutDate" className="font-medium">
                {" "}
                Check Out
              </label>
              <input
                type="date"
                id="checkOutDate"
                placeholder="check-In"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="guests" className="font-medium">
                {" "}
                guests
              </label>
              <input
                type="number"
                id="guests"
                placeholder="0"
                className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[blue] hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full  max-md:mt-6 md:px-6  py-3  md:py-4 text-base cursor-pointer  "
          >
            Check Availability
          </button>
        </form>

        {/* common specification */}

        <div className="mt-40 space-y-4">
          {roomCommonData.map((space, index) => (
            <div key={index} className="flex items-center gap-2">
              <img
                src={space.icon}
                alt={`${space.title}-icon`}
                className="w-6.5"
              />

              <div>
                <p className="text-base">{space.title}</p>
                <p className="text-gray-500">{space.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl border-y  border-gray-300 my-15 py-10 mt-7 text-gray-500">
          <p>
            Guests will be allocted on the grounded floor according to
            availibity . you get a comfotarble two bedroom apartmrnt has a true
            city feeling . the price quated is for two , at the guest slot
            please mark the number of guests to get the exact price for groups .
            The guests will be allocated grounded floor according to
            availability . you get thr comfortable two bedrooms apartment that
            has a true city feeling.
          </p>
        </div>
        {/* Hosted */}

        <div className="flex flex-col items-start gap-4 mt-6">
          <div className="flex gap-4">
            <img  className="h-14 w-14 md:h-18 rounded-full" src={room.hotel.owner.image} alt="Host" />
            
            <div>
              <p>Hosted By {room.hotel.name}</p>
              <div className="flex items-center mt-1">
                <StarRateing/>
                <p className="ml-2">200+ reviews</p>
              </div>
            </div>


          </div>

          <button className=" px-6 py-2.5 mt-4 rounded text-white  bg-[blue] cursor-pointer">Contact Now</button>

        </div>
      </div>
    )
  );
}
