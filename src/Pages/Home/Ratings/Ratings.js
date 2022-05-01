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
        <div className='ratings_parents'>
            <h2 className='rat_taitle'>Customar Response</h2>
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