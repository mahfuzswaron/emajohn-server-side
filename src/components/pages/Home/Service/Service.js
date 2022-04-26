import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const {title, img, fees, description, _id} = props.service;
    const navigate = useNavigate();
    const handleProceedFunc = props?.handleProceed;
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
                <Button variant="primary" 
               
                onClick={()=> {
                    if(handleProceedFunc){
                        return handleProceedFunc();
                    }
                    else{

                        return navigate(`/checkout/${_id}`)
                    }
                }}
                
                >Proceed</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;