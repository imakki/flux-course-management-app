import React from "react";
import { Link } from "react-router-dom";

function NotFoundSlug() {
  return (
    <div>
      <h2>Slug not found</h2>
      <p>
        <Link to="/courses">Back to Courses Page</Link>
      </p>
    </div>
  );
}

export default NotFoundSlug;
