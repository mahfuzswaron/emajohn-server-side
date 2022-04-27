import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth';
import auth from '../../shared/Firebase/Firebase.init';
import axios from 'axios';
const SignUp = () => {
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const navigate = useNavigate();

      if(error || updateError){
          console.log('error from hook', error.message || updateError.message);
          return;
      }
      if(loading || updating){
          return <p>Loading...</p>
      }
      if(user){
          console.log(user);
          return <p>{user.user.displayName} is regestered</p>
      }

    const  handleSignUp = async (e) =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

       await createUserWithEmailAndPassword(email, password);
       await updateProfile({displayName: name});
       const {data} = await axios.post('http://localhost:4000/getJwt', {email});
        const accesstoken = data.accessToken;
        await localStorage.setItem('accessToken', accesstoken);
        console.log('successfully got token', accesstoken)
       navigate('/login');

    }

    return (
        <div>
            <h2 className='text-primary text-center my-5'>Sign up</h2>
            <div className='d-flex justify-content-center mx-auto'>
            <Form onSubmit={(e)=> handleSignUp(e)}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" />
                </Form.Group>
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
                    Sign up
                </Button>
            </Form>
            </div>
            <p className='text-center'>Already have an account? <Link className='text-decoration-none' to='/login'>Login here</Link> </p>
            
        </div>
    );
};

export default SignUp;