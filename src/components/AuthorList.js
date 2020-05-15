import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AuthorList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Author Name</th>
          <th>Author Id</th>
        </tr>
      </thead>
      <tbody>
        {props.authors.map((author) => {
          return (
            author.id && (
              <tr key={author.id}>
                <td>
                  <Link to={`/author/${author.id}`}>{author.name}</Link>
                </td>
                <td>{author.id}</td>
              </tr>
            )
          );
        })}
      </tbody>
    </table>
  );
}

AuthorList.propTypes = {
  //deleteAuthor: PropTypes.func.isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AuthorList;
