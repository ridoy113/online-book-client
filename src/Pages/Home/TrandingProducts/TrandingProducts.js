import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TrandingProduct from '../TrandingProduct/TrandingProduct';
import './TrandingProducts.css'

const TrandingProducts = () => {
    const navigate = useNavigate();

    const [trandingProducts, setTrandingProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/trandingProduct')
            .then(res => res.json())
            .then(data => setTrandingProducts(data))
    }, [])

    const navigateManage = event => {
        navigate('/manage')
    }

    return (
        <div id="tranding" className='container_tdr'>
            <h1 className='tranding_tital '>Tranding Books Of This Time</h1>
            <div className='service_container '>
                {
                    trandingProducts.map(trandingProduct => <TrandingProduct
                        key={trandingProduct._id}
                        trandingProduct={trandingProduct}
                    >
                    </TrandingProduct>)
                }
            </div>
            <div className='container btn w-50 d-block mx-auto'>
                <button onClick={navigateManage} className='manage_btn'>MANAGE - INVENTORIES</button>
            </div>
        </div>
    );
};

export default TrandingProducts;