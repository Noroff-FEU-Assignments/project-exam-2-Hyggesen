import PropTypes from "prop-types";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function HotelCard(props) {
  return (
    <>
      <Card>
        <TopCard>
          <AbsolutePosition>{props.price},- /night</AbsolutePosition>

          <NavLink to={"/hotels/" + props.id}>
            {" "}
            <ThumbNail src={props.image} alt={props.altText} />
          </NavLink>
        </TopCard>
        <BottomCard>
          <HotelName>{props.name}</HotelName>
          <LocationWrapper>
            <Address>{props.address}&nbsp;|&nbsp;</Address>
            <Distance>{props.distance} km to city centre</Distance>
          </LocationWrapper>
          <Score>Score: {props.score}</Score>

          <StyledLink to={"/hotels/" + props.id} aria-label="Read more">
            Read more
          </StyledLink>
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
  altText: PropTypes.any,
};

const Card = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 5px;
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
  @media (max-width: 340px) {
    flex-direction: column;
  }
`;

const Address = styled.p`
  color: #9aa4aa;
  font-size: 14px;
  margin-top: 5px;
  margin-right: 5px;
  @media (max-width: 340px) {
    margin: 0px;
  }
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
  margin-bottom: 15px;
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
  width: 100%;
  max-width: 150px;
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
  @media (max-width: 340px) {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  color: #19024b;
  font-size: 16px;
  text-decoration: underline;

  &:hover {
    color: #f72585;
  }

  @media (max-width: 340px) {
    display: none;
  }
`;
