import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {useDataContext} from './contexts/DataContext';
// import {axiosWithAuth} from './utilis/axiosWithAuth';
import SavedCard from './SavedStylists';

export default function CustomerDash() {
    const { data, dispatchData } = useDataContext();

    const customer = 
        {
          id: 1,
          isCustomer: true,
          password: 'Sierra',
          username: 'Sierra',
          name: 'Sierra',
          email: 'sierra@gmail.com',
          city: 'San Diego',
          profile_img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
          saved_stylists: [
            {
                id: 2,
                name: 'Hector',
                salon: 'Hector\'s Barber Shop',
                city: 'San Diego',
                profile_img: 'https://images.unsplash.com/photo-1541705897117-dc56b6637c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
              }
          ],
        }

    // useEffect(()=> {
    //     const customerId = (props.match.params.id);
    //     const customerData = data.customer.find(el => el.id === customerId);
    //     dispatchData({type: 'SET_CUSTOMER', payload: customerData})
    // }, [])

    // if(!data.customer){ return <Redirect to='/signup'></Redirect> }
    

    const handleDelete = (id) => {
        dispatchData({type: 'DELETE_SAVED_STYLIST', payload: id})
    }

    return (
        <div>
        <h1>Customer Dashboard</h1>
        <section className = 'about-me'>
            <InfoBox>
                <div>
                    <img alt='stylist profile' src={customer.profile_img}/>
                </div>
                <div className='profile-text'>
                    <h3>{customer.name}</h3>
                    <p>{customer.city}</p>
                    <NavLink to='edit-profile' className='edit-btn' >Edit</NavLink>
                </div>
            </InfoBox>                
        </section>

        <Saved>
            <h3>Your Saved Stylists</h3>
            <div>
                {customer.saved_stylists.map(stylist=> (
                <SavedCard key={stylist.id} stylist={stylist}/>

                ))}
            </div>
        </Saved>
        </div>

    )
}

const InfoBox = styled.div`
    border-bottom: 1px solid #80808075;
    text-align: left;
    padding: 20px;
    width: 85%;
    height: 400px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    align-content: center;

    img{
        height: 300px;
        width: 300px;
        object-fit: cover;
        border-radius: 50%
        
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
    padding: 10px;
    margin: 0 auto;
    div{
        display: flex;
        justify-content: center;
    }    
`;



// const initialBio = {
//     name: '',
//     savedStylists: [],
//     imageUrl: '',
//     address: '',
//     email: '',
//     id: '',
// }
// const handleDelete = (id) => {
    //     axiosWithAuth()
    //     .delete(`/api/${stylist.id}`).then(res=> {
    //       this.props.updateStylist(res.data);
    //       this.props.history.push('/customer-dash');
    //     }) .catch(err=> console.log('Not deleted:', err.response))
    //   };