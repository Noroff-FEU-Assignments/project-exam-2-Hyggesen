import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default function DeleteItem(props) {
  const [error, setError] = useState(null);

  const tkn = localStorage.getItem("Token");

  async function handleDelete() {
    const confirmDelete = window.confirm("Delete this item?");

    if (confirmDelete) {
      try {
        const response = await axios.delete(props.url, {
          headers: { Authorization: `Bearer ${tkn}` },
        });
        console.log(response.status);
      } catch (e) {
        console.log("something went wrong!", e);
      }
    }
  }

  return (
    <button type="button" className="error" onClick={handleDelete}>
      {error ? "Error" : "Delete"}
    </button>
  );
}

DeleteItem.propTypes = {
  url: PropTypes.string,
};
