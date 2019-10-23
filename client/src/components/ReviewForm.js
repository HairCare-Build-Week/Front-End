import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {useDataContext} from './contexts/DataContext';
// import {axiosWithAuth} from '../utilis/axiosWithAuth';

const ReviewForm = () => {
    const {data, dispatchData} = useDataContext();

    const [newReview, setNewReview] = useState({
        id: Date.now(),
        text: '',
        // client: data.client,
    })
    
    useEffect(()=> setNewReview({
        ...newReview, 
    }, []))

    const handleChange = e => {
        setNewReview({
            ...newReview,
                [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatchData({
            type:'ADD_REVIEW',
            payload: newReview
        })
    }

    // addReview = this.state.newReview => {
    //     axiosWithAuth()
    //     .post('/reviews', state.newReview)
    //     .then(res => {
    //         localStorage.setItem('token', res.data.payload)
    //     })
    //     .catch(err=> console.log(err.message))
    // }

    return(
        <div>
            <p>Add Review</p>
            <AddReviewBox onSubmit={handleSubmit}>
                <input 
                type='text'
                name='review'
                type='text'
                // value={review}
                placeholder='Add Comment'
                onChange={handleChange}/>

                <button type='submit'>+</button>
            </AddReviewBox>
        </div>
    )
    
}

export default ReviewForm;

const AddReviewBox = styled.form`
    border: 1px solid black,
    height: 100px,
    width: 300px,
    background: black,
    color: white
    input{
        height: 50px;
        width: 35%;
    }
    button{
        border: none;
        background: none;
        font-size: 30px
        :hover{
            transform: scale(1.1)
        }
    }
`;