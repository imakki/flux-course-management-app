import React, { useState, useEffect } from "react";
import authorStore from "../../stores/authorStore";
import { loadAuthors } from "../../actions/authorActions";
import PropTypes from "prop-types";

function DropDown(props) {
  let wrapperClass = "form-group";
  if (props.error && props.error.length > 0) {
    wrapperClass += " has-error";
  }

  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    authorStore.addChangeListener(onChange);
    if (authorStore.getAuthors().length === 0) loadAuthors();
    return () => authorStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setAuthors(authorStore.getAuthors());
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          className="form-control"
        >
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      {props.errors && <div className="alert alert-danger">{props.errors}</div>}
    </div>
  );
}

DropDown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

DropDown.defaultProps = {
  error: "",
  value: 1,
};

export default DropDown;
