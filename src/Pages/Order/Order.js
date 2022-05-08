import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useTrandingDetail from '../../hooks/useTrandingDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Order = () => {
    const { trandingId } = useParams();
    const [trandingProduct] = useTrandingDetail(trandingId);
    const [user] = useAuthState(auth);


    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            trandingProduct: trandingProduct.name,
            trandingId: trandingId,
            address: event.target.address.value,
            // phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/myItem', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Order IS Booked!!! See You Soon-');
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h3>Please Order Your Book: {trandingProduct.name}</h3>
            <form onSubmit={handlePlaceOrder}>

                <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='Name' required readOnly />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name='email' placeholder='Email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={trandingProduct.name} name='book' placeholder='Book' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='Address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="phone" name='phone ' placeholder='phone' required />
                <br />
                <input className='btn btn-danger' type="submit" value="Please Order" />

            </form>
        </div>
    );
};

export default Order;
