import React from 'react';

const Blogs = () => {
    return (
        <div className='text-center p-5'>
            <h2> Difference between javascript and nodejs?</h2>
            <p>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</p>
            <h2> When should you use nodejs and when should you use mongodb?</h2>
            <p>MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily. There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That’s why we use nodeJS.</p>
            <h2>Differences between sql and nosql databases?</h2>
            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <h2>What is the purpose of jwt and how does it work?</h2>
            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
        </div>
    );
};

export default Blogs;