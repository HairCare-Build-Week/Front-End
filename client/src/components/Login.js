import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from './utilis/axiosWithAuth';
import ProtectedRoute from './PrivateRoute';
import styled from 'styled-components';
import {NavLink, Redirect} from 'react-router-dom';
import { useUserContext } from './contexts/UserContext';
import { useDataContext } from './contexts/DataContext';
import {testStylists, testCustomers} from '../testData';


export default function Login (props) {
    const { user, dispatch } = useUserContext();
    const { data, dispatchData } = useDataContext();

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        usertype: 'user',
      });

      useEffect(() => {
        dispatchData({ type: 'IMPORT_CUSTOMER_DATA', payload: testCustomers});
        dispatchData({ type: 'IMPORT_STYLIST_DATA', payload: testStylists});
        dispatchData({ type: 'SET_STYLIST', payload: testStylists});
        dispatchData({ type: 'SET_CUSTOMER', payload: testCustomers});
      }, []);

    const handleChange = e =>{
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        if( 
            testCustomers.find(
            obj=>
                obj.username === credentials.username &&
                obj.password === credentials.password
            )
        ){
            localStorage.setItem('token', 'customer' + credentials.username);
            localStorage.setItem('usertype', 'customer');
            dispatch({
                type: 'LOGIN_SUCCESS',
                usertype: 'customer',
                username: credentials.username,
            });
            dispatch({type: 'LOGIN_CUSTOMER'});
            props.history.push(`/customer-dash/${props.customer.id}`);
        } else if (
            testStylists.find(
            obj =>
                obj.username === credentials.username &&
                obj.password === credentials.password,
            )
        ){
            localStorage.setItem('token', 'stylist' + credentials.username);
            localStorage.setItem('usertype', 'stylist');
            dispatch({
                type: 'LOGIN_SUCCESS',
                usertype: 'stylist',
                username: credentials.username,
            });
            dispatch({type: 'LOGIN_STYLIST'});
            props.history.push(`/stylist-dash/${props.stylist.id}`);
        } else {
            dispatch({type: 'LOGIN_FAILURE'})}
    }

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', credentials)
        .then(res=> {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/login');
        })
        .catch(err=>console.log('Access Denied, Cyborg!', err))
    }

    if (localStorage.getItem('token')) {
        if (localStorage.getItem('isStylist') === true) {
          return <Redirect to={`/stylist-dash/${localStorage.getItem('id')}`} />
        } 
        else if (localStorage.getItem('isCustomer') === true){
          return <Redirect to={`/customer-dash/${localStorage.getItem('id')}`} />
        } 
      }

    // const logout = e => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //     .post('/api/signup', credentials)
    //     .then(res=> {
    //         localStorage.setItem('token', !res.data.payload);
    //         props.history.push('/logout');
    //     })
    //     .catch(err=>console.log('Have a nice trip', err))
    // }
    
        return (
            <LoginPage>
                <img alt='girls hair getting trimmed' src='https://github.com/HairCare-Build-Week/Marketing-Page/blob/sierra-curtis/images/hair-hair-salon-hair-stylist-2799609.jpg?raw=true'/>
                <LoginForm onSubmit={handleSubmit}>
                    <h3>Welcome Back</h3>
                    <input type='text' name='username' value={credentials.username} 
                    placeholder="username" onChange={handleChange}/>

                    <input type='password' name='password' value={credentials.password} placeholder="password" onChange={handleChange}/>

                    <button type='submit' onClick={login}>Login</button>
                    <NavLink to='/signup'><button>Signup</button></NavLink>

                </LoginForm>
            </LoginPage>
        );
};

const LoginPage = styled.div`
    img{
        height: 100vh;
        width: 100vw;
        object-fit: cover
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
    };
`;


const LoginForm = styled.form`
    display:flex;
    margin: 100px auto;
    flex-direction: column;
    box-shadow: 1px 2px 4px #000;
    background: white;
    width: 350px;
    input{
        width: 300px;
        margin: 20px;
    }
    div{
        display: flex;
        justify-content: center
    }
    button{
        color: #000;
        font-size: 1rem;
        border: none;
        background: none;
        text-decoration: none;
        color: black;
        :hover{transform: scale(1.025); color: #80808095; cursor: pointer}
    }
`;