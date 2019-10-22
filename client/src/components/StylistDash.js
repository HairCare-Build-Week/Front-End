import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom';
// import styled from 'styled-components';

const StylistDash = props => {
    return (
        <div>
            <h1>Your Dashboard</h1>
            <h2>{props.name}</h2>
        </div>
    )
}

export default StylistDash;