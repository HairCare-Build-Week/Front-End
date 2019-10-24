import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';




function SearchCard(props)  {

    return (
        <Card>
            <Link to={`/${props.id}`}>
                {/* <img src={props.img} alt='stylist profile'/>
             */}
            <img src='..\images\logo.jpg' alt='logo purple girl'/>

                <h3>{props.name}</h3>
                <p>This is a hair stylist.</p>
            </Link>
        </Card>
    )
}


const Card = styled.div`
    height: 300px;
    width: 300px;
    padding: 5px;
    border: 1.5px solid pink;
    background: white;
    img{
        height: 200px;
        width: 250px;
        object-fit: cover;
    }
    a{
        text-decoration: none;
        color: black
    }
    :hover{transform: scale(1.025)}
`;

export default SearchCard