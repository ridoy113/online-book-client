import React from 'react';
import './TrandingProduct.css'

const TrandingProduct = ({ trandingProduct }) => {

    const { name, supplier, img, description, quantity, price } = trandingProduct;

    return (
        <div className='product_card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h6>Price: ${price}</h6>
            <p><small>{description}</small></p>
            <p>Quantity: {quantity}pic.</p>
            <h5>Supplier: {supplier}</h5>
            <button className='button-1'>UPDATE</button>
        </div>
    );
};

export default TrandingProduct;