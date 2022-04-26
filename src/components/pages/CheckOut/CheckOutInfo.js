import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

import auth from '../../shared/Firebase/Firebase.init'

const CheckOutInfo = ({service}) => {
    const {title, _id} = service;
    const [user] = useAuthState(auth);
    const handleSubmit =(e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const address = e.target?.address?.value;
        const phone = e.target.phone.value;
        const order = {
            name, email, address, phone, serviceId:_id
        }
        console.log(order)
        // http://localhost:4000/orders
        axios.post('http://localhost:4000/orders', order).then(res => console.log(res)).catch(error => console.log(error))
    }
    
    return (
        <div>
            <h3>Please Fllup this form</h3>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <input className='w-50  mb-2' value={user?.displayName} type={'text'} name='name' placeholder='your name' required/>
                <br/>
                <input className='w-50  mb-2' value={user.email} type={'email'} name='email' placeholder='Email'readOnly disabled required/>
                <br/>
                <input className='w-50  mb-2' value={title} type={'text'} name='service' placeholder='service'readOnly disabled/>
                <br/>
                <input className='w-50 mb-2' type={'text'} name='address'  placeholder='address' required/>
                <br/>
                <input className='w-50  mb-2' type={'text'} value={user?.phone} name='phone' placeholder='phone'/>
                <br/>
                <input className='w-50  mb-2' type={'submit'} value='submit'/>
            </form>
        </div>
    );
};

export default CheckOutInfo;