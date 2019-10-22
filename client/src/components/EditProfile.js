import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from './utilis/axiosWithAuth';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const initialBio = {
    name: '',
    imageUrl: '',
    address: '',
    email: ''
}


const EditBio = props => {
    const [editing, setEditing] = useState(false);
    const [profile, setProfile] = useState(initialBio);
    
    const handleChange = ev => {
    ev.persist();
    let value = ev.target.value;
    setProfile({
        ...profile,
        [ev.target.name]: value
        })
    }

    useEffect(()=> {
    const profileToEdit = props.profile;
    if (profileToEdit) setProfile(profileToEdit);
    }, [props.profile, props.match.params.id]);


    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .put(`${props.customer}`, profile)
        .then(res=> {
            props.updateProfile(res.data);
            props.history.push('/customer-dash');

        })
        setEditing(false);
    };

// const editingBio = bioToEdit  => {
//     setEditing(true);
//     setBio(bioToEdit)
// }

return (
    <div>
        <h3>Edit Profile</h3>
        <ProfileImg>
            <img src={props.imageUrl}/>
        </ProfileImg>
   
        <EditForm onSubmit={handleSubmit}>
            <input 
            name='name'
            onChange={handleChange}
            value={props.name}
            placeholder='Name'
            />

            <input 
            name='address'
            onChange={handleChange}
            value={props.address}
            placeholder='Address'
            />

            <input 
            name='email'
            onChange={handleChange}
            value={props.email}
            placeholder='Email'
            />

            <div>
                <p className='edit-btn-aft' onClick={handleSubmit}><Link to='/customer-dash'>Save</Link></p>
            </div>
        </EditForm>
    
    </div>
    )
}



export default EditBio;

const ProfileImg = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    margin: 0 auto;
    border: 1px solid purple;
`;

const EditForm = styled.form`
    // margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    input{
        width: 400px;
        margin: 20px;
        justify-content: center;

    }
    div{
        display: flex;
        justify-content: center;
    }
    .edit-btn-aft{
        color: #000;
        font-size: 1.25rem;
        border: none;
        background: none;
        margin: 0 20px;
    }   
    a{
        text-decoration: none;
        color: black;
        :hover{transform: scale(1.025); color: #80808095; cursor: pointer}
    }
`;