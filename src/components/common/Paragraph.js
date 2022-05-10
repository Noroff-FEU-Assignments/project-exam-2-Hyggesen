import PropTypes from "prop-types";
import styled from "styled-components";

export default function Paragraph(props) {
  return <Para>{props.content}</Para>;
}

Paragraph.propTypes = {
  content: PropTypes.string.isRequired,
};

const Para = styled.p`
  font-size: 18px;
  color: #9aa4aa;
  font-weight: 400;
  letter-spacing: -0.04%;
  line-height: 183%;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
