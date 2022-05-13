import "./App.css";
import Navbar from "./components/common/Navbar";
import HomeSection from "./sections/HomeSection";
import FeaturedSection from "./sections/FeaturedSection";
import TestimonialSection from "./sections/TestimonialSection";
import ContactSection from "./sections/ContactSection";
import ParkingSection from "./sections/ParkingSection";
import Footer from "./components/common/Footer";
import Helmet from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Holidaze Hotels</title>
        <meta
          name="description"
          content="Your number one place for hotels in Bergen"
        />
      </Helmet>
      <Navbar />
      <HomeSection />
      <FeaturedSection />
      <TestimonialSection />
      <ContactSection />
      <ParkingSection />
      <Footer />
    </div>
  );
}

export default App;
