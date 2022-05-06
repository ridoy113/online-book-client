import React, { useEffect, useState } from 'react';
import Rating from '../Rating/Rating'
import './ratings.css'

const Ratings = () => {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        fetch('package3.json')
            .then(res => res.json())
            .then(data => setRatings(data))
    }, [])

    return (
        <div id="review" className='ratings_parents'>
            <h1 className='rat_taitle'>Customar Response</h1>
            <div className='ratings'>
                {
                    ratings.map(rating => <Rating
                        key={rating.id}
                        rating={rating}
                    ></Rating>)
                }
            </div>
        </div>
    );
};

export default Ratings;