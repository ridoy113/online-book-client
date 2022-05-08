import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const OrderHistory = () => {
    const [user] = useAuthState(auth);
    const [orderHistory, setOrderHistory] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const getOrderHistory = async () => {
            const email = user.email;
            const url = `https://cryptic-hollows-38754.herokuapp.com/myItem?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrderHistory(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')

                }
            }
        }
        getOrderHistory();

    }, [user])
    return (
        <div>
            <h2>Your Orders: {orderHistory.length}</h2>
        </div>
    );
};

export default OrderHistory;