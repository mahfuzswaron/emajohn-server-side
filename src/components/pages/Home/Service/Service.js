import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {title, img, fees, description, _id} = service;
    const navigate = useNavigate();
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {description}
                <span>Fees: ${fees}</span>
                </Card.Text>
                <Button variant="primary" onClick={()=> navigate(`/checkout/${service._id}`)}>Proceed</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;