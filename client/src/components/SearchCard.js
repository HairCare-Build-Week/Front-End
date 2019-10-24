import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';




function SearchCard(props)  {

    return (
        <Card>
            <Link to={`/${props.id}`}>
                <div>
                    <img src={props.img} alt='stylist profile'/>
                </div>
                <div>
                    <h3>stylist{props.name}</h3>
                    <p>salon name: {props.salon}</p>
                </div>
            </Link>
        </Card>
    )
}


const Card = styled.div`
    height: 300px;
    width: 80%;
    padding: 5px;
    border: 1.5px solid pink;
    background: white;
    display: flex;
    img{
        height: 300px;
        width: 300px;
        object-fit: cover;
    }
    a{
        text-decoration: none;
        color: black
    }
    :hover{transform: scale(1.025)}
`;

export default SearchCard