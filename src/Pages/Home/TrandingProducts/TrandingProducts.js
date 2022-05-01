import React, { useEffect, useState } from 'react';
import TrandingProduct from '../TrandingProduct/TrandingProduct';
import './TrandingProducts.css'

const TrandingProducts = () => {

    const [trandingProducts, setTrandingProducts] = useState([]);

    useEffect(() => {
        fetch('package.json')
            .then(res => res.json())
            .then(data => setTrandingProducts(data))
    }, [])

    return (
        <div className='container_tdr'>
            <h1 className='tranding_tital '>Tranding Books Of This Time</h1>
            <div className='service_container'>
                {
                    trandingProducts.map(trandingProduct => <TrandingProduct
                        key={trandingProduct.id}
                        trandingProduct={trandingProduct}
                    >
                    </TrandingProduct>)
                }
            </div>
        </div>
    );
};

export default TrandingProducts;