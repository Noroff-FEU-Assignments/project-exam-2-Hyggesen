import "./App.css";
import Navbar from "./components/common/Navbar";
import HomeSection from "./sections/HomeSection";
import FeaturedSection from "./sections/FeaturedSection";
import TestimonialSection from "./sections/TestimonialSection";
import EnquireSection from "./sections/EnquireSection";
import ParkingSection from "./sections/ParkingSection";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <FeaturedSection />
      <TestimonialSection />
      <EnquireSection />
      <ParkingSection />
      <Footer />
    </div>
  );
}

export default App;
