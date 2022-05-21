import PropTypes from "prop-types";
import styled from "styled-components";
import arrow from "../../assets/common/white_arrow.png";

export default function BigButton(props) {
  return (
    <Button
      href={props.href}
      style={{ backgroundColor: props.color }}
      aria-label={props.aria}
    >
      {props.content}

      <Image src={arrow} />
    </Button>
  );
}

BigButton.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  href: PropTypes.string,
  aria: PropTypes.string,
};

const Button = styled.button`
  font-size: 20px;
  color: white;
  font-weight: 600;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 50px;
  outline: inherit;
  border: none;
  margin: 15px 0px;

  &:hover {
    box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.1);

    cursor: pointer;
  }

  @media (max-width: 480px) {
    max-width: 350px;
    width: 100%;
    font-size: 16px;
  }
`;

const Image = styled.img`
  margin-left: 20px;
`;
