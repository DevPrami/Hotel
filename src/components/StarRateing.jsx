import React from "react";
import { assets } from "../assets/assets";

export default function ({rating = 4}) {
  return (
    <>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img src={rating > index ? assets.starIconFilled : assets.starIconOutlined} alt="starIcon" className="w-4.5 h-4.5"/>
        ))}
    </>
  );
}
