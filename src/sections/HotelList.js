import React, { useState, useEffect } from "react";
import HotelCard from "../components/common/HotelCard";
import styled from "styled-components";
import Loader from "../components/common/Loader";

import Helmet from "react-helmet";
import Paragraph from "../components/common/Paragraph";

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

  const hotelResults = hotel
    .filter((item) => {
      if (searchTerm === "") {
        return item;
      } else if (
        item.attributes.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.attributes.address
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.attributes.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        return item;
      }
      return "";
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
    <Wrapper>
      <Helmet>
        <title>Holidaze Hotels</title>
        <meta
          name="description"
          content="Your number one place for hotels in Bergen"
        />
      </Helmet>
      <Searchbar>
        <HotelSearch
          type="text"
          placeholder="Search to filter.."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </Searchbar>

      {hotel.length ? (
        hotelResults.length ? (
          <Grid> {hotelResults} </Grid>
        ) : (
          <Paragraph content="No matching results.." />
        )
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
}

export default HotelList;

const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  grid-auto-rows: auto;

  grid-gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Searchbar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;

  border-radius: 100px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HotelSearch = styled.input`
  border-radius: 50px;
  outline: none;
  border: 1px solid #f6f2ff;
  height: 40px;
  padding-left: 20px;
  max-width: 600px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  color: #9aa4aa;
  font-size: 16px;
  font-weight: 300;

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;
