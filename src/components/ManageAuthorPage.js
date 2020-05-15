import React, { useState, useEffect } from "react";
import AuthorsForm from "./AuthorsForm";
import authorStore from "../stores/authorStore";
import { toast } from "react-toastify";
import * as authorActions from "../actions/authorActions";
import { saveAuthor } from "../api/authorApi";

function ManageAuthorPage(props) {
  const [authors, setAuthors] = useState(authorStore.getAuthors());
  const [errors, setErrors] = useState({});
  const [author, setAuthor] = useState({
    name: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Add listener
    authorStore.addChangeListener(onChange);
    const id = props.match.params.id;
    if (authors.length === 0) {
      authorActions.loadAuthors();
    } else if (id) {
      //check for course based on slug.if not found redirect to 404
      const _course_slug = authorStore.getAuthorsById(id);
      if (_course_slug !== undefined) {
        setAuthor(authorStore.getAuthorsById(id));
        setIsLoading(true);
      } else {
        props.history.push("/404");
      }
    }
    return () => authorStore.removeChangeListener(onChange);
  }, [authors.length, props.match.params.id, props]);

  function onChange() {
    setAuthors(authorStore.getAuthors());
  }

  function handleChange({ target }) {
    setAuthor({ ...author, [target.name]: target.value });
  }

  function formIsValid() {
    const _errors = {};
    if (!author.name) _errors.name = "Author Name is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    console.log("mange-auth-page:" + typeof author.id);
    saveAuthor(author).then(() => {
      props.history.push("/authors");
      toast.success("Author saved");
    });
  }

  return (
    <>
      <h2>Manage Authors</h2>
      <AuthorsForm
        author={author}
        onSubmit={handleSubmit}
        onChange={handleChange}
        errors={errors}
      />
    </>
  );
}

export default ManageAuthorPage;
