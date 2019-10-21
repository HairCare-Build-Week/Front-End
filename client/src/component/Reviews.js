import React from 'react';
import styled from 'styled-components';
import ReviewForm from './ReviewForm';

const Reviews = props => {
    return (
        <ReviewList>
            <h1>Reviews</h1>
            <ReviewForm/>
            <ul>
                <li>Review:</li>
                <li>Review:</li>

            {/* {props.reviews.map(item=> (
                <li>{item}</li>
            ))} */}
            </ul>
        </ReviewList>
    )
}

export default Reviews;

const ReviewList = styled.div`
    width: 35%;
    max-height: 40%;
    margin: 0 auto;
    text-align: left;
    ul li{
        padding: 10px;
        border-bottom: 1.5px solid gray;
        list-style-type: none
    }
`;