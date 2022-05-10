import PropTypes from "prop-types";
import styled from "styled-components";

export default function TextArea(props) {
  return (
    <>
      <Label labelFor={props.id}>{props.label}</Label>
      <TheTextArea
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelFor: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const TheTextArea = styled.textarea`
  border-radius: 8px;
  outline: none;
  border: 1px solid #f6f2ff;
  height: 30px;
  padding-left: 10px;
  max-width: 400px;
  width: 100%;
  margin-top: 15px;
  color: #9aa4aa;
  font-size: 16px;
  font-weight: 300;
  min-height: 70px;
  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #19024b;
`;
