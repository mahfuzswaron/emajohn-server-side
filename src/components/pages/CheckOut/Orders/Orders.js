import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../shared/Firebase/Firebase.init';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    
    useEffect(()=>{
        axios.get(`http://localhost:4000/orders/?email=${user.email}`, {
            headers:{
                authorization: `Bareer ${localStorage.getItem('accessToken')}`
            }
        }).then(data => console.log(data))

    }, [])
    return (
        <div>
            <h1>you have n orders</h1>
        </div>
    );
};

export default Orders;