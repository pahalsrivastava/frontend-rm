import React from "react";
import { useParams } from "react-router-dom";

function DynamicRoute() {
  const { id } = useParams();

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Dynamic Route Page</h2>
      <p>Dynamic Route Parameter: <strong>{id}</strong></p>
      <p>Example URL: <code>/dynamic/101</code></p>
    </div>
  );
}

export default DynamicRoute;
