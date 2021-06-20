import './App.css'
import React, { useState } from 'react'

function App() {
  //eslint-disable-next-line
  const [loginStatus, setLoginStatus] = useState(false) //used for when the login function is implemented
  //eslint-disable-next-line
  const [counter, setCounter] = useState(0) //Testing

  return (
    <h1>SU Planner</h1>
  );
}

export default App;
