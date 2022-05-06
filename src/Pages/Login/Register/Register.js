import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        
    }

    return (
        <div className='login_from container w-50 mx-auto mt-5'>
            <h2 className='text-danger text-center'>Please Register</h2>
            <Form onSubmit={handleRegister}>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="danger" type="submit">
                    Register
                </Button>
            </Form>
            <p>Al ready have an account on OnlineBook? <Link to='/login' className='text-Primary pe-auto text-decoration-none' onClick={navigateLogin}>Please LogIn</Link></p>
        </div>
    );
};

export default Register;