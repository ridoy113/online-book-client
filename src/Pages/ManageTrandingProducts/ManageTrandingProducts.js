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
        <div>
            <h2>Manage My All Tranding Books</h2>
            {
                trandingProducts.map(trandingProduct => <div key={trandingProduct._id}>
                    <h4>{trandingProduct.name}</h4>
                    <button onClick={() => handleDelete(trandingProduct._id)}>Delete From Home</button>
                </div>)
            }
        </div >
    );
};

export default ManageTrandingProducts;