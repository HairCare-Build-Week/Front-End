import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//Components
import Home from "./components/Home";
import SignUp from "./components/SignUp";


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-up" component={SignUp}/>
    </div>
  );
}

export default App;
