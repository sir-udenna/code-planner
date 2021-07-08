import './App.css'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const title = 'code-planner'
  //eslint-disable-next-line
  const [loginStatus, setLoginStatus] = useState(false) //used for when the login function is implemented

  //Splash page
  //Description decsribing purpose of the app and the problem it solves
  //Get started button to create account or create a planner on the go

  return (
    <Router>
      <div className="main">
        <h3>Logo</h3> 
      </div>
      <Switch>
        <Route exact path="/">
          <h1>Welcome to {title}</h1>
          <h3>The solition to all of your code productivity needs</h3>
          <h2 id="getstarted">Get started</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
