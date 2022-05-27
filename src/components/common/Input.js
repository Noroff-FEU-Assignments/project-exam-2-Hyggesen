import PropTypes from "prop-types";
import styled from "styled-components";

export default function Input(props) {
  return (
    <>
      <Label labelFor={props.id}>{props.label}</Label>
      <TheInput
        id={props.id}
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        autoComplete={props.autocomp}
      />
    </>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.any,
  label: PropTypes.string.isRequired,
  labelFor: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  ref: PropTypes.any,
  autocomp: PropTypes.string,
};

const TheInput = styled.input`
  border-radius: 8px;
  outline: none;
  border: 1px solid #f6f2ff;
  height: 30px;
  padding-left: 10px;
  max-width: 500px;
  width: 100%;
  margin-top: 15px;
  color: #9aa4aa;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #19024b;
  align-items: left !important;
  width: 100%;
  @media (max-width: 480px) {
    max-width: 250px;
  }
`;
