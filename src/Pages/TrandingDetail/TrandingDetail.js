import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const TrandingDetail = () => {
    const { trandingId } = useParams();

    const [trandingProduct, setTrandingProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/trandingProduct/${trandingId}`;

        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setTrandingProduct(data))

    }, [])

    return (
        <div>
            <h2>You Need This Tranding And Famous Book:{trandingProduct.name}</h2>

            <Link to='/order'>
                <button className='btn btn-danger'>Order This Book</button>
            </Link>
        </div>
    );
};

export default TrandingDetail;