import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

// STYLING
import GlobalStyle from './component/styled-components/GlobalStyle';

// CONTEXTS MANAGE STATE
import UserProvider from './component/contexts/UserContext';
import DataProvider from './component/contexts/DataContext';

//COMPONENTS
import Nav from './component/Nav';
import SearchPage from './component/SearchPage';
import Reviews from './component/Reviews';


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


const Title = styled.h1`
  font-size: 48px;
  color: blue
  `;