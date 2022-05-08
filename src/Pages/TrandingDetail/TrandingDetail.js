import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useTrandingDetail from '../../hooks/useTrandingDetail';

const TrandingDetail = () => {
    const { trandingId } = useParams();
    const [trandingProduct] = useTrandingDetail(trandingId);


    return (
        <div>
            <h2>You Need This Tranding And Famous Book:{trandingProduct.name}</h2>

            <Link to={`/order/${trandingId}`}>
                <button className='btn btn-danger'>Order This Book</button>
            </Link>
        </div>
    );
};

export default TrandingDetail;