import Navbar from "../components/common/Navbar";
import Heading from "../components/common/Heading";
import coverPhoto from "../assets/brand/minh-pham-OtXADkUh3-I-unsplash.jpg";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import checkIcon from "../assets/brand/checkIcon.png";
import HeadingTwo from "../components/common/HeadingTwo";
import Paragraph from "../components/common/Paragraph";
import Review from "../components/common/Review";
import Input from "../components/common/Input";
import TextArea from "../components/common/Textarea";
import BigButton from "../components/common/BigButton";
function SingleHotel() {
  return (
    <>
      <Navbar />

      <div className="container">
        <HotelWrapper>
          <CoverImage src={coverPhoto} />
          <FlexDiv>
            <Heading content="Bergen Tropical Resort" />
            <Score>
              <ScoreP>Score: 8,3</ScoreP>
            </Score>
          </FlexDiv>
          <TopFeatures>
            <TopFeature>
              <Check src={checkIcon} />
              <TopFeatureText>Spa</TopFeatureText>
            </TopFeature>
            <TopFeature>
              <Check src={checkIcon} />
              <TopFeatureText>Balcony</TopFeatureText>
            </TopFeature>
            <TopFeature>
              <Check src={checkIcon} />
              <TopFeatureText>Fitness room</TopFeatureText>
            </TopFeature>
          </TopFeatures>
          <FlexDiv>
            <Price>1337,- /night</Price>
            <OrderNow>Order now</OrderNow>
          </FlexDiv>
          <PartSection>
            <HeadingTwo content="Hotel Description" />
            <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " />
          </PartSection>
          <PartSection>
            <HeadingTwo content="Facilities" />
            <Ul>
              <li>
                {" "}
                <TopFeature>
                  <Check src={checkIcon} />
                  <TopFeatureText>Fitness room</TopFeatureText>
                </TopFeature>
                <TopFeature>
                  <Check src={checkIcon} />
                  <TopFeatureText>Fitness room</TopFeatureText>
                </TopFeature>
                <TopFeature>
                  <Check src={checkIcon} />
                  <TopFeatureText>Fitness room</TopFeatureText>
                </TopFeature>
                <TopFeature>
                  <Check src={checkIcon} />
                  <TopFeatureText>Fitness room</TopFeatureText>
                </TopFeature>
              </li>
            </Ul>
          </PartSection>
          <PartSection>
            <HeadingTwo content="Reviews" />
            <Review
              name="Anonymous"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t"
            />
            <Review
              name="Anonymous"
              review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t"
            />
            <LeaveReview>Would you like to leave a review?</LeaveReview>
            <Form>
              <Input
                id="fullname"
                placeholder="Full name"
                type="text"
                label="Full name"
              />
              <TextArea id="comment" placeholder="Comment" label="Comment" />
              <BigButton content="Publish" color="#F72585" />
            </Form>
          </PartSection>
        </HotelWrapper>
      </div>

      <Footer />
    </>
  );
}

export default SingleHotel;

const CoverImage = styled.img`
  width: 100%;
  height: 420px;
  border-radius: 25px;
  object-fit: cover;
  margin-bottom: 30px;
`;

const HotelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 100px 0px;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Score = styled.div`
  background-color: #96ecd3;
  padding: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const ScoreP = styled.p`
  font-size: 20px;
  margin: 0px;
  font-weight: 600;
`;

const TopFeatures = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  align-items: center;
  justify-content: space-between;
`;

const TopFeature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Check = styled.img`
  object-fit: contain;
  margin-right: 10px;
`;

const TopFeatureText = styled.p`
  color: #9aa4aa;
  font-size: 18px;
`;

const Price = styled.p`
  font-weight: 700;
  color: #f72585;
  font-size: 25px;
  margin-bottom: 50px;
`;

const OrderNow = styled.div`
  height: 55px;
  width: 230px;
  background-color: #4361ee;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    background-color: #5c77f8;
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
`;

const PartSection = styled.div`
  padding: 30px 0px;
`;

const LeaveReview = styled.p`
font-size:25px;
color:#19024B:


`;

const Form = styled.form`
  display: flex;
  justify-content: column;
`;
