import Navbar from "../components/common/Navbar";
import Heading from "../components/common/Heading";
import HotelList from "../sections/HotelList";
import Footer from "../components/common/Footer";

function Hotels() {
  return (
    <>
      <Navbar />
      <Heading content="Hotels" />
      <HotelList />
      <Footer />
    </>
  );
}

export default Hotels;
