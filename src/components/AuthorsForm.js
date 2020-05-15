import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function AuthorsForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="name"
        name="name"
        label="Author's Name"
        value={props.author.name}
        onChange={props.onChange}
        error={props.error}
      />
      <button className="btn btn-primary">Save Author</button>
    </form>
  );
}

AuthorsForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
};

export default AuthorsForm;
