import IntroText from "../components/common/IntroText";
import styled from "styled-components";
import Heading from "../components/common/Heading";
import Testimonial from "../components/common/Testimonial";
function TestimonialSection() {
  return (
    <WhiteSection>
      <div className="container">
        <IntroText content="Our Reputation" />
        <Heading content="Testimonials" />
        <TestimonialsWrapper>
          <Testimonial
            name="John Doe"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ></Testimonial>
          <Testimonial
            name="Larry Wheels"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ></Testimonial>
          <Testimonial
            name="Jane Caskins"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ></Testimonial>
        </TestimonialsWrapper>
      </div>
    </WhiteSection>
  );
}

export default TestimonialSection;

const WhiteSection = styled.div`
  background-color: white;
  padding: 200px 0px;

  @media (max-width: 1024px) {
    padding: 50px 0px;
  }
`;

const TestimonialsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
