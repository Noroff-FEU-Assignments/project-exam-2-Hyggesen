import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Thumnail from "../../assets/brand/minh-pham-OtXADkUh3-I-unsplash.jpg";

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
      <Card>
        <TopCard>
          <AbsolutePosition>1690,- /night</AbsolutePosition>
          <a href="/">
            <ThumbNail src={Thumnail} />
          </a>
        </TopCard>
        <BottomCard>
          <HotelName>Bergen City Sleepovers </HotelName>
          <LocationWrapper>
            <Address>Torgallmenningen</Address>
            <Distance>0 km to city centre</Distance>
          </LocationWrapper>
          <Score>Score: 9,3</Score>
          <ReadMoreLink href="/">Read more</ReadMoreLink>
        </BottomCard>
      </Card>
    </>
  );
}

export default FeaturedHotels;

const Card = styled.div`
  max-width: 300px;
  width: 100%;
`;

const TopCard = styled.div``;

const BottomCard = styled.div``;

const HotelName = styled.p`
  color: #19024b;
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0px 0px 0px;
`;

const LocationWrapper = styled.p`
  display: flex;
  margin: 0px;
`;

const Address = styled.p`
  color: #9aa4aa;
  font-size: 14px;
  margin-top: 5px;
`;

const Distance = styled.p`
  color: #9aa4aa;
  font-size: 14px;
  margin-top: 5px;
`;

const Score = styled.div`
  color: #19024b;
  padding: 5px 10px;
  background-color: #96ecd3;
  font-size: 14px;
  font-weight: 500px;
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: 600;
`;

const ThumbNail = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 25px;
  object-fit: cover;
  position: relative;
`;

const AbsolutePosition = styled.div`
  position: absolute;
  background-color: #fcca46;
  width: 150px;
  height: 30px;
  left: 150px;
  top: 200px;
  z-index: 10;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px 0px 0px 4px;
  font-size: 18px;
`;

const ReadMoreLink = styled.p`
  color: #19024b;
  font-size: 16px;
  text-decoration: underline;
`;
