import React, { useState } from "react";
import AuthorsForm from "./AuthorsForm";

const ManageAuthorPage = (props) => {
  const [author, setAuthor] = useState({
    name: "",
  });

  function handleChange({ target }) {
    setAuthor({ ...author, [target.name]: target.value });
  }

  return (
    <>
      <h2>Manage Authors</h2>
      <AuthorsForm author={author} onChange={handleChange} />
    </>
  );
};

export default ManageAuthorPage;
