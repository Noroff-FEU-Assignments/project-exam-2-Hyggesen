import IntroText from "../components/common/IntroText";
import styled from "styled-components";
import Heading from "../components/common/Heading";
import FeaturedHotels from "../components/data/FeaturedHotels";

function FeaturedSection() {
  return (
    <BlueSection>
      <div className="container">
        <IntroText content="We recommend" />
        <Heading content="Featured locations" />
        <FeaturedHotels />
      </div>
    </BlueSection>
  );
}

export default FeaturedSection;

const BlueSection = styled.div`
  background-color: #fdfcff;
  padding: 200px 0px;
`;
