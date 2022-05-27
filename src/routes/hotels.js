import Navbar from "../components/common/Navbar";
import HotelList from "../sections/HotelList";
import Footer from "../components/common/Footer";
import styled from "styled-components";
function Hotels() {
  return (
    <>
      <Navbar />
      <FlexDiv id="hotels">
        <HotelList />
      </FlexDiv>
      <Footer />
    </>
  );
}

export default Hotels;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 20px;
  min-height: 500px;
`;
