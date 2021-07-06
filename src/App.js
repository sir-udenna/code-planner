import './App.css'
import React, { useState } from 'react'

function App() {
  //eslint-disable-next-line
  const [loginStatus, setLoginStatus] = useState(false) //used for when the login function is implemented

  //Splash page
  //Description decsribing purpose of the app and the problem it solves
  //Get started button to create account or create a planner on the go

  return (
    <>
      <h1>Planner Home Page title</h1>
      <h3>Some description</h3>
      <h3>Get started</h3>
    </>
  );
}

export default App;
