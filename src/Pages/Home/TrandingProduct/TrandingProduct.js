import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './TrandingProduct.css'

const TrandingProduct = ({ trandingProduct }) => {

    const { id, name, supplier, img, description, quantity, price } = trandingProduct;
    const navigate = useNavigate();

    const navigateToDetail = id => {
        navigate(`/tanding/${id}`)
    }

    return (
        <div className='product_card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h6>Price: ${price}</h6>
            <p><small>{description}</small></p>
            <p>Quantity: {quantity}pic.</p>
            <h5>Supplier: {supplier}</h5>

            <Button onClick={() => navigateToDetail(id)} className='button-1'>UPDATE</Button>

        </div>
    );
};

export default TrandingProduct;