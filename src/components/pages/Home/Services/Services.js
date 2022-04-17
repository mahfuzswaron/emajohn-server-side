import React, { useEffect, useState } from 'react';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('Services.json')
        .then(res=> res.json())
        .then(data => setServices(data));
    }, [services])

    return (
        <div>
             <h2 className='text-center text-primary mt-3 mb-5'>SERVICES: {services.length}</h2>
             

        </div>
    );
};

export default Services;