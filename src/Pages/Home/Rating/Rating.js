import React from 'react';
import './Rating.css'

const Rating = ({ rating }) => {

    const { name, img, rat, fellings } = rating;

    return (
        <div className='rat_card'>
            <div className='rat_info'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='cart_info'>
                    <h4>{name}</h4>
                    <h6>Rating: {rat}str.</h6>
                    <p>{fellings}</p></div>
            </div>
        </div>
    );
};

export default Rating;