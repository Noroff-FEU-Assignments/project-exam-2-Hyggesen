import styled from "styled-components";

export default function Searchbar() {
  <div>
    <TextInput
      type="text"
      placeholder="Search for hotel name or location.."
    ></TextInput>
    <SubmitInput type="submit"></SubmitInput>
  </div>;
}

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

const SubmitInput = styled.input`
  margin-left: -100px;
  height: 35px;
  width: 100px;
  background: #19024b;
  color: white;
  border: 1px solid #19024b;
  border-radius: 0px 8px 8px 0px;
  -webkit-appearance: none;
`;
