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
            name="Joe Smith"
            content="I used holidaze when me and my wife were going to Bergen. Clear website, easy ordering. No nonsense. I highly recommend Holidaze!"
          ></Testimonial>
          <Testimonial
            name="Larry Wheeltown"
            content="I've used Holidaze many times before. Best prices, best hotels. No one can compete with Holidaze when it comes to hotels in Bergen."
          ></Testimonial>
          <Testimonial
            name="Jane Caskins"
            content="I am very careful when choosing a booking company. Security, reliability and service are important. It is always a joy to order through holidaze. You get it the way you want it."
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
