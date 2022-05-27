import IntroText from "../components/common/IntroText";
import styled from "styled-components";
import Heading from "../components/common/Heading";
import React, { useState, useEffect } from "react";
import HotelCard from "../components/common/HotelCard";
import Loader from "../components/common/Loader";
import Paragraph from "../components/common/Paragraph";
function FeaturedSection() {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://noroff-project-exam-ben.herokuapp.com/api/hotels?populate=*`
        );
        const json = await response.json();
        setHotel(json.data);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  const allFeatured = hotel
    .filter((item) => {
      if (item.attributes.featured) {
        return item;
      } else {
        return false;
      }
    })
    .map((item) => (
      <HotelCard
        key={item.id}
        name={item.attributes.name}
        price={item.attributes.price}
        image={
          item.attributes.thumbnail.data
            ? item.attributes.thumbnail.data.attributes.url
            : item.attributes.thumbnail_url
        }
        score={item.attributes.score}
        address={item.attributes.address}
        distance={item.attributes.km_to_city_centre}
        id={item.id}
        altText={item.attributes.name}
      />
    ));

  return (
    <BlueSection>
      <div className="container">
        <IntroText content="We recommend" />
        <Heading content="Featured locations" />

        {hotel.length ? (
          allFeatured.length ? (
            <FlexDiv> {allFeatured} </FlexDiv>
          ) : (
            <Paragraph content="We couldn't find any featured hotels.." />
          )
        ) : (
          <Loader />
        )}
      </div>
    </BlueSection>
  );
}

export default FeaturedSection;

const BlueSection = styled.div`
  background-color: #faf8ff;
  padding: 200px 0px;
  @media (max-width: 1024px) {
    padding: 50px 0px;
  }
`;
const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 50px;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 1200px;
    padding: 10px 0px;
    align-items: center;
  }
`;
