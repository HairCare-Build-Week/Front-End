import React from "react";
import { Link, NavLink } from "react-router-dom";
import Styled from "styled-components";

const SignupButton = Styled.button`
display:flex;
margin: auto;

`


export default function Home() {
  return (
    <div>
      <img className="navbar-logo" alt="Hair Care logo" src="https://img.pngio.com/hair-salon-clipart-hair-stylist-png-hair-extension-logo-ideas-736-hair-stylist-png-images-736_797.jpg"/>

        <NavLink to="/sign-up" className="sign-up-btn">
        <SignupButton> 
          Sign Up
        </SignupButton>
        </NavLink>
    </div>
  );
}
