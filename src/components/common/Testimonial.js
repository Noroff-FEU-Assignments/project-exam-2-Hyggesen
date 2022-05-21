import PropTypes from "prop-types";
import styled from "styled-components";
import avatar from "../../assets/common/user_avatar.png";
import Paragraph from "./Paragraph";

export default function Testimonial(props) {
  return (
    <>
      <Testimonials>
        <TheTestimonial>
          <Top>
            <Avatar
              src={avatar}
              alt="A dark blue circle with a pink user-avatar"
            ></Avatar>
            <Name>{props.name}</Name>
          </Top>
          <Bottom>
            <Paragraph content={props.content} />
          </Bottom>
        </TheTestimonial>
      </Testimonials>
    </>
  );
}

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const Testimonials = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  margin: 40px 0px;
  flex-wrap: wrap;
`;

const TheTestimonial = styled.div`
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
