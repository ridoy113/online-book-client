import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useTrandingDetail from '../../hooks/useTrandingDetail';
import './TrandingDetails.css'

const TrandingDetail = () => {
    const { trandingId } = useParams();
    const [trandingProduct] = useTrandingDetail(trandingId);


    return (
        <div className='book-info'>
            <h2 className='tranding_tital'>You Need This Tranding And Famous Book</h2>

            <img src={trandingProduct.img} alt="" />
            <h2>{trandingProduct.name}</h2>
            <h6>Price: ${trandingProduct.price}</h6>
            <p><small>{trandingProduct.description}</small></p>
            <p>Quantity: {trandingProduct.quantity}pic.</p>
            <h5>Supplier: {trandingProduct.supplier}</h5>
            <Link to={`/order/${trandingId}`}>
                <button className='btn btn-danger'>Order This Book</button>
            </Link>
        </div>
    );
};

export default TrandingDetail;