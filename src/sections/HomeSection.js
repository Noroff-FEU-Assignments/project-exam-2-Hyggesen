import Heading from "../components/common/Heading";
import BigParagraph from "../components/common/BigParagraph";
import bigIcon from "../assets/brand/holidaze_icon.png";
import Searchbar from "../components/Searchbar";
import styled from "styled-components";

function HomeSection() {
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
          <Searchbar />
        </div>
      </div>
    </HomeWrapper>
  );
}

export default HomeSection;

const HomeWrapper = styled.div`
  height: 100vh;
`;

const HotelIcon = styled.img`
  margin-bottom: 20px;
`;
