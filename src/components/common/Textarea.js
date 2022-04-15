import PropTypes from "prop-types";
import styled from "styled-components";

export default function TextArea(props) {
  return (
    <>
      <Label labelFor={props.id}>{props.label}</Label>
      <TheTextArea id={props.id} placeholder={props.placeholder} />
    </>
  );
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
};

const TheTextArea = styled.textarea`
  border-radius: 8px;
  outline: none;
  border: 1px solid #f6f2ff;
  height: 30px;
  padding-left: 10px;
  max-width: 400px;
  width: 100%;
  margin: 10px 0px;
  color: #9aa4aa;
  font-size: 16px;
  font-weight: 300;
  min-height: 70px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #19024b;
`;