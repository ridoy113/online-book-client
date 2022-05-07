import React from 'react';
import './Book.css'

const Book = ({ book }) => {
    const { name, id, supplier, img, description, quantity, price } = book;
    return (
        <div className='book_cart'>
            <img src={img} alt="" />
            <div className='book_info'>
                <p>ID: {id}</p>
                <h2>{name}</h2>
                <p><small>{description}</small></p>
                <h6>Quantity: {quantity}</h6>
                <h5>Price: ${price}</h5>
                <p>Supplier Name: {supplier}</p>
                <button className='book_btn'>DELETE</button>
            </div>



        </div>
    );
};

export default Book;