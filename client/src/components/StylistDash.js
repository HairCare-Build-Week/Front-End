import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {useDataContext} from './contexts/DataContext';
import {useUserContext} from './contexts/UserContext';
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

const savedStylist = {
    id: Date.now(),
    name: '',
    address: '',
    imageUrl: '',
    salon: ''
}

const StylistDash = props => {
    const {data, dispatchData} = useDataContext();
    const { user, dispatch } = useUserContext();
    const {savedStylist, setSavedStylist} = useState();

    useEffect(()=> {
        const stylistName = props.match.params.id;
        dispatchData({type: 'SET_STYLIST', payload: stylistName})
    }, [])

    const handleAddStylist = e => {
        setSavedStylist({
            savedStylist: {
            ...savedStylist,
            [e.target.name]: e.target.value
            }
        })
    }

    const addStylist = savedStylist => {
        axiosWithAuth()
        .post(`/api/customer-dash/${props.customer.id}`, savedStylist)
        .then(res=> {
            localStorage.setItem('token', res.data.payload)
        })
        .catch(err=> console.log(err))
    }
    
    const addImage = newImage => {
        axiosWithAuth()
        .post(`/api/stylist-dash/${props.stylist.id}`, newImage)
        .then(res=> {
            localStorage.setItem('token', res.data.payload)
        })
        .catch(err=> console.log(err))
    }

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

                        {user.isStylist && (
                            <NavLink to='edit-bio' className='edit-btn'>Edit</NavLink>
                        )}
                        
                        {user.isCustomer &&(
                            <SaveButton onClick={addStylist}>Save Stylist</SaveButton>
                        )}
                        
                    </div>

                </InfoBox>                
            </section>
            {/* <Reviews/> */}

            <section className = 'gallery'>
                <Gallery>
                    <div> 
                        <NavLink to='add-image'>
                            <SaveButton >+Add Image</SaveButton>
                        </NavLink>
                        {/* {user.isStylist &&(
                            <SaveButton onClick={addImage}>Add Image</SaveButton>
                        )} */}  
                    </div>  
                    <div>
                    <GalleryImg>
                        <img src='https://img.pngio.com/hair-salon-clipart-hair-stylist-png-hair-extension-logo-ideas-736-hair-stylist-png-images-736_797.jpg'/>
                    </GalleryImg>
                    
                    {/* {data.stylist.map(el=> (
                        <GalleryImg>
                            <img src={`${el.img.src}`}/>
                        </GalleryImg>
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
    border-bottom: 1px solid #80808075;
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
    pading: 100px
    h3{ align-text: center}
    div{
        display: flex;
        flex-wrap: wrap: 
    }
    div:nth-child(1){
        justify-content: flex-end;
        margin: 10px;
    }
    img{
        margin: 5px;
        height: 300px;
        object-fit: cover;
        box-shadow: .5px 1px 3px black;
    }
`;

const GalleryImg = styled.div`
img{
    margin: 5px;
    height: 300px;
    object-fit: cover;
    box-shadow: .5px 1px 3px black;
}
`;
