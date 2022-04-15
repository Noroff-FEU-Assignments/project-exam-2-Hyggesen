import IntroText from "../components/common/IntroText";
import styled from "styled-components";
import Heading from "../components/common/Heading";
import PinkArrow from "../assets/brand/pink_arrow.png";
import Paragraph from "../components/common/Paragraph";
import BigButton from "../components/common/BigButton";

function ParkingSection() {
  return (
    <WhiteSection>
      <div className="container">
        <Wrapper>
          <DivSplit>
            <img src={PinkArrow} />
          </DivSplit>
          <DivSplit>
            <IntroText content="Don't miss out" />
            <Heading content="Free parking for 7 days" />
            <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" />
            <BigButton
              content="Find your hotel"
              color="#4361EE"
              href="/hotels"
            />
          </DivSplit>
        </Wrapper>
      </div>
    </WhiteSection>
  );
}

export default ParkingSection;

const WhiteSection = styled.div`
  background-color: white;
  padding: 200px 0px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const DivSplit = styled.div`
  width: 100%;
`;
