import React, { useState, useEffect } from "react";
import Form, {column} from "react-bootstrap/Form";
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
    usertype: ''
  });

  // const signup = e => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //   .post('/signup', credentials)
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
      <SignupForm onSubmit={handleSubmit}>
      <h1>Sign Up</h1>

        <Form.Group controlId="formGroupEmail" className='input-grp'>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group controlId="formGroupEmail" className='input-grp'>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formGroupPassword" className='input-grp'>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group /*as={Col}*/ controlId="formGridCity" className='input-grp'>
          <Form.Control 
            placeholder="City" 
            type="text" 
            onChange={handleChange}
          />
        </Form.Group>
        
      <p>I am a Stylist</p>
        <Form.Group controlId="formGroupUsertype" className='select-grp'>
          <Form.Check 
            type='checkbox'
            value='stylist'
            onChange={handleChange}
          />         
        </Form.Group>
        
        <button type="submit">Submit</button>

      </SignupForm>

    </div>
  );
}


const SignupForm = styled.form`
    display:flex;
    margin: 100px auto;
    padding: 10px;
    flex-direction: column;
    box-shadow: 1px 2px 4px #000;
    width: 350px;
    justify-content: center;
    input{
        width: 300px;
        margin: 20px;
    }
    div{
        display: flex;
        justify-content: center
    }
    p{
      margin: 0;
      padding: 0;
    }
    
    button{
        color: #000;
        font-size: 1rem;
        border: none;
        padding: 5px 7px;
        background: none;
        text-decoration: none;
        color: black;
        :hover{transform: scale(1.025); color: #80808095; cursor: pointer}
    }
`;