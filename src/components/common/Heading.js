import PropTypes from "prop-types";
import styled from "styled-components";

export default function Heading(props) {
  return <Heading1>{props.content}</Heading1>;
}

Heading.propTypes = {
  content: PropTypes.string.isRequired,
};

const Heading1 = styled.h1`
  font-size: 40px;
  color: #19024b;
  font-weight: 800;
  margin: 0px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
