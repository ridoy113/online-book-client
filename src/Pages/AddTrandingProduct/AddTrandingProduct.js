import React from 'react';
import { useForm } from "react-hook-form";
import './AddTrandingProduct.css'

const AddTrandingProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = `https://cryptic-hollows-38754.herokuapp.com/trandingProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='add_book w-50 mx-auto'>
            <h2 className='tranding_tital'>Add To New Book</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Supplier' {...register("supplier", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quentity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='btn btn-danger' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddTrandingProduct;