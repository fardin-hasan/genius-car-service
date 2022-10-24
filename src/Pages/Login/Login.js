import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'


const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
// const navigate=useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        console.log(email,password);
    }

    // const navigateToRegister=()=>{

    //     navigate(`/signUp`);
    // }

    return (
        <div className='my-2 w-50 m-auto form-div'>
            <div className='w-50 m-auto p-2'>
                <h1 className='text-primary text-center my-4'>Please Login</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>

                    <div className='m-auto text-center'>
                        <Button onClick={handleLogin} className='w-100 my-2 text-center' variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
                <p>New To Genius Car Services?<Link to='/signUp' className='text-danger text-decoration-none'> Please Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;