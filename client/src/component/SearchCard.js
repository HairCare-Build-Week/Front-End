import React from "react";
import styled from 'styled-components';



function SearchCard(props)  {
    return (
        <Card>
            <img src={props.img} alt='stylist profile'/>
            <h3>{props.name}</h3>
            <p>This is a hair stylist.</p>
        </Card>
    )
}


const Card = styled.div`
    height: 300px;
    width: 250px;
    margin: 10px;
    padding: 5px;
    background: pink;
    img{
        height: 200px;
        width: 250px;
        object-fit: cover;
    }
`;

export default SearchCard