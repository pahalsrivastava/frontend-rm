import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import EventDemo from './components/events/EventDemo';
import StaticRoute from "./components/routing/StaticRoute";
import DynamicRoute from "./components/routing/DynamicRoute";

function App() {
  return (
    <Router>
      <nav style={{padding:"1rem", background:"#f0f0f0"}}>
          <Link to='/events'> EVENTS </Link> |{" "}
          <Link to='/static'> Static Route</Link> |{" "}
          <Link to='/dynamic/101'> Dynamic Route </Link>
      </nav>
    <Routes>
      <Route path="/events" element={<EventDemo/>}/>
      <Route path="/static" element={<StaticRoute/>}/>
      <Route path="/dynamic/:id" element={<DynamicRoute/>}/>
    </Routes>
    </Router>
  );
}

export default App;
