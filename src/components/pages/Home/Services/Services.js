import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Service from '../Service/Service';


const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/services')
        .then(res=> res.json())
        .then(data => {
            setServices(data)});
    }, [])

    return (
        <div>
             <h2 className='text-center text-primary mt-5 mb-5'>SERVICES: {services.length}</h2>
             <div className='container'>
             <Row xs={1} md={2} lg={3} className="">
             {
                services.map(service =>
                <Col style={{width: "380px"}}>
                <Service 
                key={service._id}
                service={service}
                ></Service>
                </Col>
                )
             }
             </Row>
             </div>

        </div>
    );
};

export default Services;