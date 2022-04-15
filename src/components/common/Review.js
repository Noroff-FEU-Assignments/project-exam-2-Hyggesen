import PropTypes from "prop-types";
import styled from "styled-components";

export default function Review(props) {
  return (
    <>
      <Reviews>
        <TheReview>
          <Name>{props.name}</Name>
          <Comment>{props.review}</Comment>
        </TheReview>
      </Reviews>
    </>
  );
}

Review.propTypes = {
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

const Reviews = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  margin: 40px 0px;
`;

const TheReview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 400px;
  background-color: #fdfcff;
  border-radius: 8px;
  padding: 20px;
`;

const Name = styled.p`
  color: #f72585;
  font-size: 18px;
  font-weight: 600;
  margin: 0px;
`;

const Comment = styled.p`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 130%;
  color: #19024b;
  margin: 5px 0px;
`;
