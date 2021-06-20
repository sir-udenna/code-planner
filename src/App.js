import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
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
          <h1>project description</h1>
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
