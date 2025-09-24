import React from "react";
import { useNavigate } from "react-router-dom";

function EventDemo({ count, incrementSearchCount }) {
  const navigate = useNavigate();

  const handleAddSearch = () => {
    incrementSearchCount();    
    navigate("/form");    
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Search Counter</h2>
      <p>You have searched for {count} cities so far.</p>
      <button onClick={handleAddSearch}>Search a new city</button>
    </div>
  );
}

export default EventDemo;
