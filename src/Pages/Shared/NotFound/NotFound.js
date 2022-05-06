import React from 'react';
import notfound from '../../../img/notfound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound'>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;