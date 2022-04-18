import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../shared/Firebase/Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if(error ){
        console.log('error from hook', error.message);
        return <p>invalid email or password</p>
    }

    if(loading){
        return <p>Loading...</p>
    }

    if(user){
        console.log(user);
        return <p>{user.user.displayName} is regestered</p>
    }
    const handleSignIn = (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(email, password)
        navigate(from, {replace: true});

    }

    return (
        <div>
            <h2 className='text-primary text-center my-5'>Log in</h2>
            <div className='d-flex justify-content-center mx-auto'>
            <Form onSubmit={(e)=> handleSignIn(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='checkbox' label="Accept terms and conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log in
                </Button>
            </Form>
            </div>
            <p className='text-center'>New here? <Link className='text-decoration-none' to='/signup'>Sign up here</Link> </p>
            <div className='d-flex justify-content-center mx-auto'>
            <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;