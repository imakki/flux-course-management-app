import React, { useState, useEffect } from "react";
import authorStore from "../stores/authorStore";
import { Link } from "react-router-dom";
import { loadAuthors } from "../actions/authorActions";
import AuthorList from "../components/AuthorList";

function AuthorPage() {
  const [authors, setAuthors] = useState(authorStore.getAuthors());

  useEffect(() => {
    authorStore.addChangeListener(onChange);
    if (authors.length === 0) loadAuthors();
    return () => authorStore.removeChangeListener(onChange);
  }, [authors.length]);

  function onChange() {
    setAuthors(authorStore.getAuthors());
  }

  return (
    <>
      <h2>Authors</h2>
      <Link to="/author" className="btn btn-primary">
        Add Author
      </Link>
      <br />
      <br />
      <AuthorList authors={authors} />
    </>
  );
}

export default AuthorPage;
