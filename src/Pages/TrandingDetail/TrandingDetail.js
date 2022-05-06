import React from 'react';
import { Link, useParams } from 'react-router-dom';

const TrandingDetail = () => {
    const { trandingId } = useParams();
    return (
        <div>
            <h2>Welcome To Detail:{trandingId}</h2>
            <Link to='/order'>
                <button className='btn btn-danger'>Order This Book</button>
            </Link>
        </div>
    );
};

export default TrandingDetail;