import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { useUserContext } from './contexts/UserContext';
import { useDataContext } from './contexts/DataContext';
import { axiosWithAuth } from "./utilis/axiosWithAuth";

export default function SignUp() {
  // const { user, dispatch } = useUserContext();
  // const { data, dispatchData } = useDataContext();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    usertype: 'customer' || 'stylist'
  });

  // const signup = e => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //   .post('/api/signup', credentials)
  //   .then(res=> {
  //     localStorage.setItem('token', res.data.payload)
  //   })
  // }

  const handleChange = e =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    };

  return (
    <div>
      <h1>Sign Up</h1>
      <SignupForm onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group /*as={Col}*/ controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control 
            placeholder="City" 
            type="text" 
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formGroupUsertype">
          <Form.Label>Choose One</Form.Label>
          <Form.Check 
            type="type" 
            id="usertype" 
            label='Stylist'
            onChange={handleChange}
          />
        </Form.Group>

      </SignupForm>

      <button type="submit">Submit</button>
    </div>
  );
}


const SignupForm = styled.form`
    display:flex;
    margin: 100px auto;
    flex-direction: column;
    box-shadow: 1px 2px 4px #000;
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
    a{
        text-decoration: none;
        color: black;
        :hover{transform: scale(1.025); color: #80808095; cursor: pointer}
    }
`;