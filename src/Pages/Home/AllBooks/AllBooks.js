import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './AllBooks.css'


const AllBooks = () => {

    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('package2.json')
            .then(res => res.json())
            .then(data => setAllBooks(data))
    }, [])

    return (
        <div className='allbooks_container'>
            <h2 className='books_title'>Our All Books Manage Inventories</h2>
            <div className='books_container'>
                {
                    allBooks.map(book => <Book
                        key={book.id}
                        book={book}
                    >
                    </Book>)
                }
            </div>
            <div className='container btn w-50 d-block mx-auto'>
                <button className='manage_btn'>Add UpComing New Books </button>
            </div>
        </div>
    );
};

export default AllBooks;