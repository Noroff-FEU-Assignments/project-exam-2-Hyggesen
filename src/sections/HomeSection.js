import Heading from "../components/common/Heading";
import BigParagraph from "../components/common/BigParagraph";
import bigIcon from "../assets/common/holidaze_icon.png";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Paragraph from "../components/common/Paragraph";

function HomeSection() {
  const [hotel, setHotel] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);

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

  const searchResults = hotel
    .filter((item) => {
      if (searchTerm === "") {
        return item;
      } else if (
        item.attributes.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return item;
      }
      return "";
    })
    .map((item) => (
      <NavLink to={"hotels/" + item.id} key={item.id}>
        <DropDownHotel>
          <ContentWrapper>
            <Image
              src={
                item.attributes.thumbnail.data
                  ? item.attributes.thumbnail.data.attributes.url
                  : item.attributes.thumbnail_url
              }
            />
            <Name>
              <p>{item.attributes.name}</p>
            </Name>
            <Score>Score:&nbsp;{item.attributes.score}</Score>
          </ContentWrapper>
        </DropDownHotel>
      </NavLink>
    ));

  return (
    <HomeWrapper>
      <div className="container">
        <div className="wrapper">
          <HotelIcon
            src={bigIcon}
            alt="Holidaze pink hotel icon with stars over it"
          />
          <Heading content="Find your perfect holiday hotel" />
          <BigParagraph content="Hotels for all types of adventures." />
          <TextInput
            type="text"
            placeholder="Search for a hotel.."
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setShowDropDown(true);

              if (event.target.value === "") {
                setShowDropDown(false);
              }
            }}
          ></TextInput>
          {showDropDown === true ? (
            <DropDown>
              <Ul>
                {" "}
                {searchResults.length ? (
                  searchResults
                ) : (
                  <Paragraph content="No matching results.." />
                )}
              </Ul>
            </DropDown>
          ) : (
            ""
          )}
        </div>
      </div>
    </HomeWrapper>
  );
}

export default HomeSection;

const HomeWrapper = styled.div`
  height: 100vh;
  text-align: center;
`;

const HotelIcon = styled.img`
  margin-bottom: 20px;
  @media (max-width: 768px) {
    max-width: 80px;
    height: auto;
  }
`;

const TextInput = styled.input`
  width: 600px;
  height: 40px;
  padding-right: 100px;
  padding-left: 20px;
  border: 1px solid #fdfcff;
  -webkit-appearance: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 400;
  outline: none;

  color: #9aa4aa;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  @media (max-width: 768px) {
    width: 450px;
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`;

const DropDown = styled.div`
  z-index: 9999910;
  margin-top: 10px;
  width: 700px;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 0px 0px 8px 8px;
  height: 400px;
  padding-right: 25px;
  overflow: hidden scroll;
  background-color: white;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #dadada;
  }

  ::-webkit-scrollbar-thumb {
    background: #19024b;
  }

  @media (max-width: 768px) {
    width: 450px;
    height: 250px;
  }

  @media (max-width: 480px) {
    width: 300px;
  }
`;

const DropDownHotel = styled.li`
  padding: 15px;
  width: 100%;

  list-style: none;

  &:hover {
    background-color: #f72585;
    color: white;
    font-weight: bold;
    border: none;
  }
`;

const Ul = styled.ul`
  width: 100%;
  padding: 0px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  display: flex;
  justify-content: left;
  width: 250px;
`;

const Score = styled.div`
  background-color: green;
  padding: 3px 20px;
  border-radius: 8px;
  color: #19024b;
  background-color: #96ecd3;
  @media (max-width: 768px) {
    display: none;
  }
`;
