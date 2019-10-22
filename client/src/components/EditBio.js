import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from './utilis/axiosWithAuth';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const initialBio = {
    name: '',
    salon: '',
    imageUrl: '',
    bio: '',
    address: ''
}


const EditBio = props => {
    const [editing, setEditing] = useState(false);
    const [bio, setBio] = useState(initialBio);
    
    const handleChange = ev => {
    ev.persist();
    let value = ev.target.value;
    setBio({
        ...bio,
        [ev.target.name]: value
        })
    }

    useEffect(()=> {
    const bioToEdit = props.bio;
    if (bioToEdit) setBio(bioToEdit);
    }, [props.bio, props.match.params.id]);


    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .put(`${props.stylist}`, bio)
        .then(res=> {
            props.updateBio(res.data);
            props.history.push('/stylist-dash');

        })
        setEditing(false);
    };

// const editingBio = bioToEdit  => {
//     setEditing(true);
//     setBio(bioToEdit)
// }

return (
    <div>
        <h3>Edit Bio</h3>
   
        <EditForm onSubmit={handleSubmit}>
            <input 
            name='bio'
            onChange={handleChange}
            value={props.bio}
            />
            <div>
                <p className='edit-btn-aft' onClick={handleSubmit}><Link to='/stylist-dash'>Save</Link></p>
            </div>
        </EditForm>
    
    </div>
    )
}



export default EditBio;

const EditForm = styled.form`
    input{
        height: 250px;
        width: 400px;
        margin: 20px;
    }
    div{
        display: flex;
        justify-content: center
    }
    .edit-btn-aft{
        color: #000;
        font-size: 1.25rem;
        border: none;
        background: none;
        margin: 0 20px;
    a{
        text-decoration: none;
        color: black;
        :hover{transform: scale(1.025); color: #80808095; cursor: pointer}
    }
`;