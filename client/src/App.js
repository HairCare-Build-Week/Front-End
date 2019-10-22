import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

// STYLING
import GlobalStyle from './components/styled-components/GlobalStyle';

// CONTEXTS MANAGE STATE
import UserProvider from './components/contexts/UserContext';
import DataProvider from './components/contexts/DataContext';

//COMPONENTS
import Nav from './components/Nav';
import SearchPage from './components/SearchPage';
import Reviews from './components/Reviews';
import StylistDash from './components/StylistDash';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <UserProvider>
        <DataProvider>
        <Router>
          <Nav/>
          <Switch>
          <Route exact path='/' render={()=> <Redirect to='login'/>}/>
          <Route path='/search' component={SearchPage}/>
          <Route path='/review' component={Reviews} />
          <Route path='/dash' component={StylistDash} />




          {/* <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup} /> 
          <PrivateRoute path='/ClientDash' component={ClientDash}/>
          <PrivateRoute path='/StylistDash' component={StylistDash}/>*/}
          
        </Switch>
        </Router>
      </DataProvider>
      </UserProvider>
      
    </div>
  );
}

export default App;

