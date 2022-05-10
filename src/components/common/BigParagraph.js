import PropTypes from "prop-types";
import styled from "styled-components";

export default function BigParagraph(props) {
  return <BigPara>{props.content}</BigPara>;
}

BigParagraph.propTypes = {
  content: PropTypes.string.isRequired,
};

const BigPara = styled.p`
  font-size: 25px;
  color: #9c99a1;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
