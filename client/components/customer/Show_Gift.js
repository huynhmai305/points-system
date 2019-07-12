import React, { Component } from 'react';
import {Card, CardHeader,CardBody, CardFooter ,CardText, CardTitle} from 'reactstrap'

class Show_Gift extends Component {
    render() {
        return (
            <div>
                <div className="p-3">
                    <Card className="h-100 w-25">
                        <CardHeader>{this.props.id_gift}</CardHeader>
                        <CardBody className="bg-success text-light">
                            <CardTitle>{this.props.title}</CardTitle>
                            <CardText>{this.props.content}</CardText>
                            <CardText>Điểm đổi: {this.props.point_gift}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Show_Gift;