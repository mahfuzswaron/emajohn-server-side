import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Service from '../Home/Service/Service';
import Blog from '../Blog/Blogs';
import CheckOutInfo from './CheckOutInfo';
const CheckOut = () => {

    const {id} = useParams();
    const [service, setService] = useState([]);
    const [showForm , setShowForm] = useState(false);
    const navigate= useNavigate();
    useEffect(()=>{
        fetch(`http://localhost:4000/services/${id}`)
        .then(res=> res.json())
        .then(data => {
            setService(data)
        
        });

    }, []);

    const handleProceed = () =>{
        
        setShowForm(true)
    }  
    
    return (
        <div>{ id ? <>
        <h2>checkout</h2>
            { showForm
            ?
            <CheckOutInfo
                service = {service}
            ></CheckOutInfo>
            :
            <Service 
                service={service}
                handleProceed={handleProceed}
            ></Service>}
            
            </> 
            :
            <h1>Please select any service to checkout</h1>
}
        </div>
    );
};

export default CheckOut;