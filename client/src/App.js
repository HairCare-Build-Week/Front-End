import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
// import SignUp from './components/SignUp';
import Login from './components/Login';
import CustomerDash from './components/CustomerDash';
import PrivateRoute from './components/PrivateRoute';
import EditBio from './components/EditBio';
import EditProfile from './components/EditProfile';
import AddImage from './components/AddImage';

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
          <Route path='/add-image' component={AddImage} />
          <PrivateRoute path='/review' component={Reviews} />
          {/* <Route path="/signup" component={SignUp}/> */}
          <Route path="/login" component={Login}/>
          <Route path="/edit-bio" component={EditBio}/>
          <Route path="/edit-profile" component={EditProfile}/>
          <Route path='/customer-dash' component={CustomerDash}/>
          <Route path='/stylist-dash' component={StylistDash} />
        </Switch>
        </Router>
      </DataProvider>
      </UserProvider>
      
      
    </div>
  );
}

export default App;

