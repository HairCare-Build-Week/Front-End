import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useUserContext } from './contexts/UserContext';
// import SearchPage from './SearchPage';
// import Reviews from './Reviews';


function Nav(props) {
    const {user, dispatch} = useUserContext();

    useEffect(()=> {
        if(localStorage.getItem('token')){
            dispatch({type: 'LOGIN_TRUE'});
        }
    }, []);

    return(
        <NavBar>
            <img src='../images/logo.jpg' alt='logo purple girl'/>
            {props.location.pathname === '/login' && (
                <NavLink to='/login'>Login</NavLink>
            )}

            {props.location.pathname === '/signup' && (
                <NavLink to='/signup'>Signup</NavLink>
            )}

          <NavLink to='/search' >Search</NavLink>
          <NavLink to='/review' >Reviews</NavLink>
          <NavLink to='/dash' >My Profile</NavLink>
          <NavLink to='/home' >Home</NavLink>
          <NavLink to='/sign-up'>Signup</NavLink>




            

            {/* {props.location.getItem('usertype') === '/stylist' && (
                <NavLink to='/stylist'>Dash</NavLink>
            )}

            {props.location.getItem('usertype') === '/client' && (
                <NavLink to='/client'>Dash</NavLink>
            )} */}

            {user.isLoggedIn && (
                <button
                OnClick={()=>{
                    localStorage.removeItem('token');
                    localStorage.removeItem('usertype');
                    localStorage.removeItem('city');
                    dispatch({type: 'LOGOUT'});
                    props.history.push('/login');
                }}>
                    Logout
                </button>
            )}
        </NavBar>
    )
}

export default withRouter(Nav);


const NavBar = styled.nav`
    background: gray; 
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    justify-content: space-evenly;
    a{
        text-decoration: none;
        color: white;
    }
    img{
        // max-height: 100%;
    }
`;