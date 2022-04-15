import PropTypes from "prop-types";
import styled from "styled-components";
import arrow from "../../assets/brand/white_arrow.png";

export default function BigButton(props) {
  return (
    <a href={props.href}>
      <Button style={{ backgroundColor: props.color }}>
        {props.content}

        <Image src={arrow} />
      </Button>
    </a>
  );
}

BigButton.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const Button = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 600;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 50px;

  &:hover {
    box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.1);

    cursor: pointer;
  }
`;

const Image = styled.img`
  margin-left: 20px;
`;
