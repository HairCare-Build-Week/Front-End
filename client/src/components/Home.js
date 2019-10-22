import React from "react";
import { Link, NavLink } from "react-router-dom";
import Styled from "styled-components";
import { nominalTypeHack } from "prop-types";

const SignupButton = Styled.button`
display:flex;
margin: auto;
`;

const LoginButton = Styled.button`
display:flex;
margin: auto;
`;

const UserInput = Styled.input`
display:flex
`;
const PasswordInput = Styled.input`
display:flex
`;

export default function Home() {
  return (
    <div>

      <h3>Login</h3>

      <div>
        <label id="Username">
          {"Username"}

          <UserInput
            id="Username"
            type="text"
            placeholder="Username"
            className="home-username-input"
          />
        </label>
      </div>
      <label id="Password">
        {"Password"}
        <PasswordInput
          id="Password"
          type="Password"
          placeholder="Password"
          className="home-password-input"
        />
      </label>
      <NavLink to="/dash" className="login-btn" >
        <LoginButton>Login</LoginButton>
      </NavLink>
      <NavLink to="/sign-up" className="sign-up-btn">
        <SignupButton>Sign Up</SignupButton>
      </NavLink>
    </div>
  );
}
