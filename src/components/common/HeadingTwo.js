import PropTypes from "prop-types";
import styled from "styled-components";

export default function HeadingTwo(props) {
  return <Heading2>{props.content}</Heading2>;
}

HeadingTwo.propTypes = {
  content: PropTypes.string.isRequired,
};

const Heading2 = styled.h1`
  font-size: 25px;
  color: #19024b;
  font-weight: 800;
  margin: 0px;
`;
