import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import About from './About'
import NavBar from './NavBar';

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <ul className="navbar">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/getstarted">Get started</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/getstarted">
          <h1>Get started</h1>
        </Route>
        <Route path="/">
          <h1>Dashboard</h1>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
