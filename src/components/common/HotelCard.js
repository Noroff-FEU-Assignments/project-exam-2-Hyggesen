import PropTypes from "prop-types";
import styled from "styled-components";

export default function HotelCard(props) {
  return (
    <>
      <Card>
        <TopCard>
          <AbsolutePosition>{props.price},- /night</AbsolutePosition>
          <a href={"/singlehotel/" + props.id}>
            <ThumbNail src={props.image} />
          </a>
        </TopCard>
        <BottomCard>
          <HotelName>{props.name}</HotelName>
          <LocationWrapper>
            <Address>{props.address}&nbsp;|&nbsp;</Address>
            <Distance>{props.distance} km to city centre</Distance>
          </LocationWrapper>
          <Score>Score: {props.score}</Score>
          <ReadMoreLink href={"/singlehotel/" + props.id}>
            Read more
          </ReadMoreLink>
        </BottomCard>
      </Card>
    </>
  );
}

HotelCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number,
};

const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const TopCard = styled.div`
  position: relative;
`;

const BottomCard = styled.div``;

const HotelName = styled.p`
  color: #19024b;
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0px 0px 0px;
`;

const LocationWrapper = styled.div`
  display: flex;
  margin: 0px;
`;

const Address = styled.p`
  color: #9aa4aa;
  font-size: 14px;
  margin-top: 5px;
  margin-right: 5px;
`;

const Distance = styled.p`
  color: #9aa4aa;
  font-size: 14px;
  margin-top: 5px;
`;

const Score = styled.div`
  color: #19024b;
  padding: 5px 10px;
  background-color: #96ecd3;
  font-size: 14px;
  font-weight: 500px;
  max-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: 600;
`;

const ThumbNail = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 25px;
  object-fit: cover;
  position: relative;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
    transition: 0.3s;
  }
`;

const AbsolutePosition = styled.div`
  position: absolute;
  background-color: #fcca46;
  width: 150px;
  height: 30px;
  left: 150px;
  top: 40px;
  z-index: 10;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px 0px 0px 4px;
  font-size: 18px;
`;

const ReadMoreLink = styled.a`
  color: #19024b;
  font-size: 16px;
  text-decoration: underline;
`;
