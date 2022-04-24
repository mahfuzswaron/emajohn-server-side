import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Service from '../Home/Service/Service';
const CheckOut = () => {

    const {id} = useParams();
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:4000/services/${id}`)
        .then(res=> res.json())
        .then(data => {
            console.log(data.img)
            setService(data)
        
        });

    }, []);

    const {title, img, description} = service;

    
    return (
        <div>
            <h2>checkout</h2>
            <Service 
                service={service}
            ></Service>
        </div>
    );
};

export default CheckOut;