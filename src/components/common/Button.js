import PropTypes from "prop-types";
import styled from "styled-components";

export default function Button(props) {
  return (
    <a href={props.href}>
      <TheButton onClick={props.click} style={{ backgroundColor: props.color }}>
        {props.content}
      </TheButton>
    </a>
  );
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  href: PropTypes.string,
  click: PropTypes.func,
};

const TheButton = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 50px;

  &:hover {
    box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.1);

    cursor: pointer;
  }
`;
