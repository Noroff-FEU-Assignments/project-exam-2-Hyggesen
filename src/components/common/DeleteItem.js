import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styled from "styled-components";
import deletetos from "../../assets/common/nofacility.png";

export default function DeleteItem(props) {
  const [error, setError] = useState(null);

  const tkn = localStorage.getItem("Token");

  async function handleDelete() {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete this ${props.deleteWhat}?`
    );

    if (confirmDelete) {
      try {
        const response = await axios.delete(props.url, {
          headers: { Authorization: `Bearer ${tkn}` },
        });
        console.log(response.status);
      } catch (e) {
        console.log("something went wrong!", e);
      } finally {
        window.location.reload();
      }
    }
  }

  return (
    <Button type="button" onClick={handleDelete}>
      Delete
    </Button>
  );
}

DeleteItem.propTypes = {
  url: PropTypes.string,
  deleteWhat: PropTypes.string,
};

const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-weight: bold;
  color: #ff6671;
  font-size: 14px;
  margin-top: 20px;
  text-decoration: underline;
`;
