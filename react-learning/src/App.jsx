// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import EventDemo from "./components/events/EventDemo";
import StaticRoute from "./components/routing/StaticRoute";
import DynamicRoute from "./components/routing/DynamicRoute";
import FormDemo from "./components/forms/FormDemo";
import WeatherApiDemo from "./components/api/WeatherApiDemo";
import DynamicRoutelink from "./components/routing/DynamicRoutelink";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [searchCount, setSearchCount] = useState(() => {
    const s = localStorage.getItem("searchCount");
    return s ? Number(s) : 0;
  });

  useEffect(() => {
    localStorage.setItem("searchCount", searchCount);
  }, [searchCount]);

  const incrementSearchCount = () => {
    setSearchCount((prev) => prev + 1);
  };

  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
        <Link to="/events">Events</Link> |{" "}
        <Link to="/static">Static Route</Link> |{" "}
        <Link to="/dynamic/101">Dynamic Route</Link> |{" "}
        <Link to="/form">Form Demo</Link> |{" "}
        <Link to="/api-weather">Weather API</Link> <br/>
        <br/>
        <DynamicRoutelink/>
      </nav>
      <Routes>
        <Route
          path="/events"
          element={
            <EventDemo
              count={searchCount}
              incrementSearchCount={incrementSearchCount}
            />
          }
        />
        <Route path="/static" element={<StaticRoute />} />
        <Route path="/dynamic/:id" element={<ProtectedRoute> {<DynamicRoute />}</ProtectedRoute> }/>
        <Route path="/dynamic-link" element={<DynamicRoutelink />} />
        <Route path="/form" element={<FormDemo />} />
        <Route path="/api-weather" element={<WeatherApiDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
