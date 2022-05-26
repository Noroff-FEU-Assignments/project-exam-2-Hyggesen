import IntroText from "../components/common/IntroText";
import styled from "styled-components";
import Heading from "../components/common/Heading";
import PinkArrow from "../assets/common/pink_arrow.png";
import Paragraph from "../components/common/Paragraph";
import BigButton from "../components/common/BigButton";

import { HashLink } from "react-router-hash-link";
function ParkingSection() {
  return (
    <WhiteSection>
      <div className="container">
        <Wrapper>
          <DivSplit1>
            <img src={PinkArrow} alt="A stylish pink arrow" />
          </DivSplit1>
          <DivSplit2>
            <IntroText content="Don't miss out" />
            <Heading content="Free parking for 7 days" />
            <Paragraph content="Did you know that through holidaze you always get 7 days free parking, covered by us as long as you book the hotel through our website. The best parking offer on the market!" />
            <HashLink to="/hotels">
              <BigButton
                content="Find your hotel"
                color="#4361EE"
                aria="Find your hotel"
              />
            </HashLink>
          </DivSplit2>
        </Wrapper>
      </div>
    </WhiteSection>
  );
}

export default ParkingSection;

const WhiteSection = styled.div`
  background-color: white;
  padding: 200px 0px;
  @media (max-width: 1024px) {
    padding: 50px 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const DivSplit1 = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DivSplit2 = styled.div`
  width: 100%;
  max-width: 400px;
`;
