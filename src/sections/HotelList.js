import React, { useState, useEffect } from "react";
import HotelCard from "../components/common/HotelCard";
import image from "../assets/brand/minh-pham-OtXADkUh3-I-unsplash.jpg";

function HotelList() {
  let [hotel, setHotel] = useState([]);

  useEffect(() => {
    fetch("https://js-frameworks-ca-benjamin.herokuapp.com/api/hotels")
      .then((response) => response.json())

      .then((data) => setHotel(data));
  }, []);

  /* {hotel.data.map((item) => ( ))}*/

  console.log(hotel.data);
  return (
    <>
      <HotelCard
        name="Bergen City Sleepovers"
        price="1337"
        image={image}
        score="9,3"
        address="Torgallmenningen"
        distance="0,3"
      />
    </>
  );
}

export default HotelList;
