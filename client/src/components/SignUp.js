import React, { useState } from "react";
import Form from 'react-bootstrap/Form';


export default function SignUp(props) {

  return (
    <div>
      <h1>Sign Up</h1>

      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    </div>
  );
}
