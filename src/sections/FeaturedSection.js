import IntroText from "../components/common/IntroText";
import styled from "styled-components";
import Heading from "../components/common/Heading";
import React, { useState, useEffect } from "react";
import HotelCard from "../components/common/HotelCard";

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

  return (
    <BlueSection>
      <div className="container">
        <IntroText content="We recommend" />
        <Heading content="Featured locations" />
        <FlexDiv>
          {hotel
            .filter((item) => {
              if (item.attributes.featured) {
                return item;
              }
            })
            .map((item) => (
              <HotelCard
                key={item.id}
                name={item.attributes.name}
                price={item.attributes.price}
                image={item.attributes.thumbnail.data.attributes.url}
                score={item.attributes.score}
                address={item.attributes.address}
                distance={item.attributes.km_to_city_centre}
                id={item.id}
              />
            ))}
        </FlexDiv>
      </div>
    </BlueSection>
  );
}

export default FeaturedSection;

const BlueSection = styled.div`
  background-color: #fdfcff;
  padding: 200px 0px;
`;
const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 50px;
`;
