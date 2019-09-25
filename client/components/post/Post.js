import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';
import CardStore from '../customer/Card'

const Example = (props) => {
    return (
        <Col md={4}>
            <Card>
                <CardImg top height="200px" src={props.image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            {/* <CardStore/> */}
        </Col>
    );
};

export default Example;