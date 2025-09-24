import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import EventDemo from './components/events/EventDemo';
import StaticRoute from "./components/routing/StaticRoute";
import DynamicRoute from "./components/routing/DynamicRoute";
import FormDemo from "./components/forms/FormDemo";
import DynamicRoutelink from "./components/routing/DynamicRoutelink";

function App() {
  return (
    <Router>
      <nav style={{padding:"1rem", background:"#f0f0f0"}}>
          <Link to='/events'> EVENTS </Link> <br/> <br/> <br/>
          <Link to='/dynamic/101'> Dynamic Route </Link> {" "} <br/> <br/> <br/>
          <Link to="/form"> Fill a form </Link> <br/> <br/> <br/>
          <DynamicRoutelink/> <br/> <br/> <br/>
      </nav>

    <Routes>
      <Route path="/events" element={<EventDemo/>}/>
      <Route path="/static" element={<StaticRoute/>}/>
      <Route path="/dynamic/:id" element={<DynamicRoute/>}/>
      <Route path="/form" element={<FormDemo/>}/>
    </Routes>
    </Router>
  );
}

export default App;
