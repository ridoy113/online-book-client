import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Social from '../Social/Social';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div className='login_from container w-50 mx-auto my-5'>
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

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-primary'}`} htmlFor="terms">Accept Terms And Condition</label>

                <Button
                    disabled={!agree}
                    variant="danger w-50 mx-auto d-block mb-2 mt-2"
                    type="submit">
                    Register
                </Button>
            </Form>
            <p>Al ready have an account on OnlineBook? <Link to='/login' className='text-success pe-auto text-decoration-none' onClick={navigateLogin}>Please LogIn</Link></p>
            <Social></Social>
        </div>
    );
};

export default Register;