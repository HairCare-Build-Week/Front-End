import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {useDataContext} from './contexts/DataContext';
import {axiosWithAuth} from './utilis/axiosWithAuth';
import Reviews from './Reviews';

//add edit options
const initialBio = {
    name: '',
    salon: '',
    imageUrl: '',
    bio: '',
    address: ''
}

const StylistDash = props => {
    const {data, dispatchData} = useDataContext();
    

    useEffect(()=> {
        const stylistName = props.match.params.id;
        dispatchData({type: 'SET_STYLIST', payload: stylistName})
    }, [])

    

    // useEffect(()=> {
    //     const bioToEdit = props.bio;
    //     if (bioToEdit) setBio(bioToEdit);
    // }, [props.bio, props.match.params.id]);

    // const handleChange = ev => {
    //     ev.persist();
    //     let value = ev.target.value;

    //     setBio({
    //         ...bio,
    //         [ev.target.name]: value
    //     })
    // }

    // const editBio = bioToEdit  => {
    //     setEditing(true);
    //     setBio(bioToEdit)
    // }
    
    // if (!data.hasData){
    //     return <Redirect to='/login'/>
    // };

    return (
        <div>
            <h1>Stylist Profile</h1>
            
            <section className = 'about-me'>
                <InfoBox>
                    <div>
                        <img alt='profile of stylist, shop'/>
                    </div>
                    <div className='profile-text'>
                        <h3>Salon Name:{data.salon}</h3>
                        <h3>Name: {data.name}</h3>
                        <p>Address: Lorem ipsum {data.address}</p>
                        <p>Bio: Lorem ipsum {data.bio}</p>
                        <NavLink to='edit-bio' className='edit-btn'>Edit</NavLink>
                        <SaveButton>Save Stylist</SaveButton>
                    </div>

                </InfoBox>                
            </section>
            <Reviews/>

            <section className = 'gallery'>
                <Gallery>
                    <h3>Gallery</h3>    
                    <div>
                    <img src='https://img.pngio.com/hair-salon-clipart-hair-stylist-png-hair-extension-logo-ideas-736-hair-stylist-png-images-736_797.jpg'/>
                    <img src='https://img.pngio.com/hair-salon-clipart-hair-stylist-png-hair-extension-logo-ideas-736-hair-stylist-png-images-736_797.jpg'/>
                    {/* {data.stylist.map(el=> (
                        <img src={`${el.img.src}`}/>
                    ))} */}
                    </div>
                </Gallery>
            </section>

        </div>
    )
}

export default StylistDash;

const SaveButton = styled.button`
    background: white;
    border: 1px solid black;
    font-size: 1.2rem;
    padding: 10px 15px;
    :hover{
        transform: scale(1.025); 
        border: 1px solid #80808075;
        color: #80808075;
    }
`;

const InfoBox = styled.div`
    border: 1px solid gray
    text-align: left;
    pading: 20px;
    width: 85%;
    height: 400px;
    margin: 20px auto;
    display: flex;
    img{
        height: 100%;
        object-fit: cover;
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

const Gallery = styled.div`
    width: 85%;
    margin: 0 auto;
    pading: 20px
    border: 1px solid gray;
    h3{ align-text: center}
    div{
        display: flex;
        flex-wrap: wrap: 
    }
    img{
        margin: 5px;
        height: 300px;
        object-fit: cover;
        box-shadow: 1px 3px 3px black;
        :hover{
            transform: scale(1.025)
        }
    }
`;
