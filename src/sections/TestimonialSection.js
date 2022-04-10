import IntroText from "../components/common/IntroText";
import styled from "styled-components";
import Heading from "../components/common/Heading";
import avatar from "../assets/brand/user_avatar.png";
import Paragraph from "../components/common/Paragraph";
function TestimonialSection() {
  return (
    <WhiteSection>
      <div className="container">
        <IntroText content="Our Reputation" />
        <Heading content="Testimonials" />
        <Testimonials>
          <Testimonial>
            <Top>
              <Avatar src={avatar}></Avatar>
              <Name>John Doe</Name>
            </Top>
            <Bottom>
              <Paragraph
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat"
              />
            </Bottom>
          </Testimonial>
          <Testimonial>
            <Top>
              <Avatar src={avatar}></Avatar>
              <Name>John Doe</Name>
            </Top>
            <Bottom>
              <Paragraph
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat"
              />
            </Bottom>
          </Testimonial>
          <Testimonial>
            <Top>
              <Avatar src={avatar}></Avatar>
              <Name>John Doe</Name>
            </Top>
            <Bottom>
              <Paragraph
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat"
              />
            </Bottom>
          </Testimonial>
        </Testimonials>
      </div>
    </WhiteSection>
  );
}

export default TestimonialSection;

const WhiteSection = styled.div`
  background-color: white;
  padding: 200px 0px;
`;

const Testimonials = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  margin: 40px 0px;
`;

const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  max-width: 350px;
  width: 100%;
`;

const Avatar = styled.img`
  margin-right: 20px;
  object-fit: contain;
`;

const Top = styled.div`
  display: flex;
`;

const Name = styled.p`
  font-size: 25px;
  color: #19024b;
  font-weight: 600;
  letter-spacing: -0.04%;
  line-height: 183%;
`;

const Bottom = styled.div`
  display: flex;
`;
