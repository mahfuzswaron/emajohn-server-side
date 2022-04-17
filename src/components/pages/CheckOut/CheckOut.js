import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {

    const {service} = useParams()
    
    return (
        <div>
            <h2>checkout for {service} </h2>
        </div>
    );
};

export default CheckOut;