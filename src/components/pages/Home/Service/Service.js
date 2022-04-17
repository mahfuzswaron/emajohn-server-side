import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({service}) => {
    const {title, img, fees, description} = service;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {description}
                <p>Fees: ${fees}</p>
                </Card.Text>
                <Button variant="primary">Procced</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;