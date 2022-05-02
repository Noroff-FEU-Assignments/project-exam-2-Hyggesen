import React, { useState, useEffect } from "react";
import HotelCard from "../components/common/HotelCard";
import styled from "styled-components";

function HotelList() {
  const [hotel, setHotel] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  console.log(hotel);

  if (!hotel.length) {
    return <div>Loading...</div>;
  }

  console.log(hotel);

  return (
    <>
      <Sidebar>
        <input
          type="text"
          placeholder="Search.."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </Sidebar>{" "}
      <FlexDiv>
        {hotel
          .filter((item) => {
            if (searchTerm == "") {
              return item;
            } else if (
              item.attributes.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
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
    </>
  );
}

export default HotelList;

const FlexDiv = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  grid-auto-rows: auto;

  grid-gap: 3rem;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
