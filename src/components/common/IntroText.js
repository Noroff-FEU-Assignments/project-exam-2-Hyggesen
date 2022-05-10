import PropTypes from "prop-types";
import styled from "styled-components";

export default function IntroText(props) {
  return <BigPara>{props.content}</BigPara>;
}

IntroText.propTypes = {
  content: PropTypes.string.isRequired,
};

const BigPara = styled.p`
  font-size: 20px;
  color: #f72585;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
