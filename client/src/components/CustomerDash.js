import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {useDataContext} from './contexts/DataContext';
import {axiosWithAuth} from './utilis/axiosWithAuth';

//add edit options
const initialBio = {
    name: '',
    salon: '',
    imageUrl: '',
    bio: '',
    address: '',
    id: '',
}

const CustomerDash = props => {

    const handleDelete = () => {
        axiosWithAuth()
        .delete(`/${props.stylist.id}`).then(res=> {
          this.props.updateStylist(res.data);
          this.props.history.push('/customer-dash');
        }) .catch(err=> console.log('Not deleted:', err.response))
      };

    return (
        <div>
        <h1>Customer Dashboard</h1>
        <section className = 'about-me'>
            <InfoBox>
                <div>
                    <img alt='stylist profile' src='https://img.pngio.com/hair-salon-clipart-hair-stylist-png-hair-extension-logo-ideas-736-hair-stylist-png-images-736_797.jpg'/>
                </div>
                <div className='profile-text'>
                    <h3>Name:{props.name}</h3>
                    <p>City: {props.address}</p>
                    <p>Email: {props.email}</p>
                    <NavLink to='edit-profile' className='edit-btn' >Edit</NavLink>
                </div>
            </InfoBox>                
        </section>

        <Saved>
            <h3>Your Saved Stylists</h3>
            <div>
            <SavedCard>
                <NavLink 
                to={`/stylist/${props.stylist.id}`}
                key={props.stylist.id}
                >
                    <h4 onClick={handleDelete}>X</h4>
                    <img alt='saved stylists' src='https://img.pngio.com/hair-salon-clipart-hair-stylist-png-hair-extension-logo-ideas-736-hair-stylist-png-images-736_797.jpg'/>
                    <p>Stylist Name</p>
                </NavLink>
            </SavedCard>
            <SavedCard>
                <h4 onClick={handleDelete}>X</h4>
                <img alt='saved stylists' src='https://img.pngio.com/hair-salon-clipart-hair-stylist-png-hair-extension-logo-ideas-736-hair-stylist-png-images-736_797.jpg'/>
                <p>Stylist Name</p>
            </SavedCard>
            </div>
        </Saved>
        </div>

    )
}

export default CustomerDash;

const InfoBox = styled.div`
    border: 1px solid gray
    text-align: left;
    pading: 20px;
    width: 85%;
    height: 400px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    align-content: center;

    img{
        height: 400px;
        width: 400px;
        object-fit: cover;
        border-radius: 50%
        border: 1px solid purple;
        
    }
    div:nth-child(1){
        width: 40%;
    }
    .profile-text{
        margin-top: 20px;
    }
    p{ font-size: 1.2rem}
    .edit-btn{
        color: #80808075;
        :hover{transform: scale(1.025)}
    }
`;


const Saved = styled.div`
    width: 85%;
    border: 1px solid gray;
    padding: 10px;
    margin: 0 auto;
    div{
        display: flex;
        justify-content: center;
    }    
`;

const SavedCard = styled.div`
    width: 100px;
    flex-direction: column;
    margin: 5px;
    }
    img{
        height: 100px;
        width: 100px;
        object-fit: cover;
    }
    h4{
        text-align: right;
        font-size: 1.25rem;
        :hover{color: #80808095}
    }
    :hover{transform: scale(1.05); cursor: pointer}
`;
