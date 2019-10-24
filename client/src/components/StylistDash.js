import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {useDataContext} from './contexts/DataContext';
import {useUserContext} from './contexts/UserContext';
import {axiosWithAuth} from './utilis/axiosWithAuth';
import Reviews from './Reviews';


export default function StylistDash() {
    const {data, dispatchData} = useDataContext();
    const {user, dispatch } = useUserContext();
    const {savedStylist, setSavedStylist} = useState();

    const stylist = 
    {
      id: 1,
      username: 'Stella',
      password: 'Stella',
      name: 'Stella',
      salon: 'Stella\'s Salon',
      email: 'stella@gmail.com',
      city: 'Dallas',
      isStylist: true,
      bio: 'Hi, I am Stella. I am a hairstylist.',
      profile_img: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      images: [
        {
          imageUrl: 'https://images.unsplash.com/photo-1549236177-f9b0031756eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1554519515-242161756769?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
        },
        { imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
        }
      ]
    }

    // useEffect(()=> {
    //     const stylistId = Number(props.match.params.id);
    //     const stylistData = data.stylists.find(el => el.id === stylistId);
    //     dispatchData({type: 'SET_STYLIST', payload: stylistData})
    // }, [])

    // if(!data.stylist){ return <Redirect to='/signup'></Redirect> }

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
        .post(`/api/customer-dash`, savedStylist)
        .then(res=> {
            localStorage.setItem('token', res.data.payload)
        })
        .catch(err=> console.log(err))
    }
    
    const addImage = newImage => {
        axiosWithAuth()
        .post(`/api/stylist-dash/${stylist.id}`, newImage)
        .then(res=> {
            localStorage.setItem('token', res.data.payload)
        })
        .catch(err=> console.log(err))
    }

    // useEffect(()=> {
    //     const bioToEdit = props.bio;
    //     if (bioToEdit) setBio(bioToEdit);
    // }, [props.bio, props.match.params.id]);
    
    if (!data.hasData){
        return <Redirect to='/login'/>
    };

    return (
        <div>
            <h1>Stylist Profile</h1>
            <SaveButton onClick={addStylist}>Save Stylist</SaveButton>

            <section className = 'about-me'>
                <InfoBox>
                    <div>
                        <img src={`${stylist.profile_img}`} alt='profile of stylist, shop'/>
                    </div>
                    <div className='profile-text'>
                        <h3>{stylist.salon}</h3>
                        <h3>{stylist.name}</h3>
                        <p>{stylist.city}</p>
                        <p>{stylist.bio}</p>

                        <NavLink to='edit-bio' className='edit-btn'>Edit</NavLink>
                    </div>

                </InfoBox>                
            </section>
            {/* <Reviews/> */}

            <section className = 'gallery'>
                <Gallery>
                    <div> 
                        {stylist.isStylist &&(
                            <SaveButton onClick={addImage}>Add Image</SaveButton>
                        )} 
                    </div>  
                    <div>                    
                    {stylist.images.map(image=> (
                        <GalleryImg>
                            <img src={`${image.imageUrl}`}/>
                        </GalleryImg>
                    ))}
                    </div>
                </Gallery>

            </section>

        </div>
    )
}


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
    padding: 20px;
    width: 85%;
    height: 500px;
    margin: 20px auto;
    display: flex;
    img{
        height: 100%;
        object-fit: cover;
        margin-right: 20px;

    }
    div:nth-child(1){
    }
    .profile-text{
        align-items: center;
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
