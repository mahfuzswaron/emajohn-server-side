import React from 'react';
import { Button } from 'react-bootstrap';
import auth from '../Firebase/Firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { async } from '@firebase/util';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // bug here: email is not set to the axois request

    let email = '';
    const getToken = async(email)=>{
        const {data} = await axios.post('http://localhost:4000/getJwt', email );
        const accesstoken = data.accessToken;
        console.log(email)
        await localStorage.setItem('accessToken', accesstoken);
    }
    //---------------------------------
    if(user){
        email = user.user.email;
        getToken(email);
        return <p>user logged in</p>
    }
    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        console.log(error.message);
        return;
    }


    const handleGoogleSignIn = async(e)=>{
        e.preventDefault();
        await signInWithGoogle();
        await navigate(from, {replace: true});


    }

    return (
        <div>
            <Button className='' onClick={(e)=> handleGoogleSignIn(e)} veriant="info">Sign in with Google</Button>
        </div>
    );
};

export default SocialLogin;