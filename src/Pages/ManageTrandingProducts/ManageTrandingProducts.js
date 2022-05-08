import React from 'react';
import useTrandingProducts from '../../hooks/useTrandingProducts'

const ManageTrandingProducts = () => {
    const [trandingProducts, setTrandingProducts] = useTrandingProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure');
        if (proceed) {
            const url = `http://localhost:5000/trandingProduct/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = trandingProducts.filter(trandingProduct => trandingProduct._id !== id);
                    setTrandingProducts(remaining);
                })
        }
    }
    return (
        <div className='text-center p-5'>
            <h2 className='tranding_tital'>Manage My All Tranding Books</h2>
            {
                trandingProducts.map(trandingProduct => <div key={trandingProduct._id}>
                    <div className='py-4'>
                        <h3>Name: {trandingProduct.name}</h3>
                        <p>{trandingProduct.description}</p>
                        <h6>Price: {trandingProduct.price}</h6>

                        <button className='btn btn-danger' onClick={() => handleDelete(trandingProduct._id)}>Delete From Home</button>
                    </div>
                </div>)
            }
        </div >
    );
};

export default ManageTrandingProducts;