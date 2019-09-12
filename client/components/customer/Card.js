import React from 'react';
import {Card, CardImg, CardFooter, CardBody, CardTitle, Col} from 'reactstrap';

const CardComponent = (props) => {
    return (
        <Col xs="6" sm="3" md="3" lg="3">
            <Card>
                <CardImg top width="100%" src={props.img} alt="Card image store" /> 
                <CardBody>
                    <CardTitle>{props.content}</CardTitle>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CardComponent;