import React, { useState, useEffect } from "react";
import HotelCard from "../common/HotelCard";
import styled from "styled-components";
import image from "../../assets/brand/minh-pham-OtXADkUh3-I-unsplash.jpg";
function FeaturedHotels() {
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
      <FlexContainer>
        <HotelCard
          name="Featured hotel"
          price="1337"
          image={image}
          score="9,3"
          address="Torgallmenningen"
          distance="0,3"
        />
        <HotelCard
          name="Nice hotel"
          price="1562"
          image={image}
          score="9,3"
          address="Torgallmenningen"
          distance="0,3"
        />
        <HotelCard
          name="Cool hotel"
          price="799"
          image={image}
          score="9,3"
          address="Torgallmenningen"
          distance="0,3"
        />
      </FlexContainer>
    </>
  );
}

export default FeaturedHotels;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;
`;
