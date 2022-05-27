import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import styled from "styled-components";

export default function DeleteItem(props) {
  const tkn = localStorage.getItem("Token");

  async function handleDelete() {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete this ${props.deleteWhat}?`
    );

    if (confirmDelete) {
      try {
        /* eslint-disable no-unused-vars */
        const response = await axios.delete(props.url, {
          headers: { Authorization: `Bearer ${tkn}` },
        });
        /* eslint-disable no-unused-vars */
      } catch (e) {
        console.log(e);
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
  color: #f72585;
  font-size: 14px;
  margin-top: 20px;
  text-decoration: underline;
`;
