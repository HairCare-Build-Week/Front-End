import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from './utilis/axiosWithAuth';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const initialImage = {
    imageUrl: '',
    images: []
}


const AddImage = props => {
    const [editing, setEditing] = useState(false);
    const [newImage, setNewImage] = useState(initialImage);
    
    const handleChange = ev => {
    ev.persist();
    let value = ev.target.value;
    setNewImage({
        ...newImage,
        [ev.target.name]: value
        })
    }

    useEffect(()=> {
    const imagesToEdit = props.images;
    if (imagesToEdit) setNewImage(imagesToEdit);
    }, [props.images, props.match.params.id]);


    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .put(`${props.stylist}`, newImage)
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
        <ImageForm onSubmit={handleSubmit}>
        <h3>Select Image to Upload</h3>
            <input 
                type='file'
                accept='image/*'
                name='image'
                onChange={handleChange}
                value={props.image}
            />
            <div>
                <p className='edit-btn-aft' onClick={handleSubmit}>
                    <Link to={`${props.id}`}>Upload</Link>
                </p>
            </div>
        </ImageForm>
    
    </div>
    )
}



export default AddImage;

const ImageForm = styled.form`
    box-shadow: .5px 1px 3px #000;
    margin: 100px auto;
    width: 40%;
    h3{
        padding: 10px;
        font-size: 1.5rem
    }
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