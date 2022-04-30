import styled from "styled-components";
import PropTypes from "prop-types";

export default function Searchbar(props) {
  <div>
    <TextInput type="text" placeholder={props.placeholder}></TextInput>
  </div>;
}

Searchbar.propTypes = {
  placeholder: PropTypes.string,
  submit: PropTypes.string,
};

const TextInput = styled.input`
  width: 600px;
  height: 30px;
  padding-right: 100px;
  padding-left: 10px;
  border: 1px solid #19024b;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  color: #9aa4aa;
`;
