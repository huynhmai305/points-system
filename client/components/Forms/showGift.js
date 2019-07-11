import React, { Component } from 'react';

class showGift extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>{this.props.id_gift}</CardHeader>
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardText>{this.props.content}</CardText>
                        <Button>Lấy mã</Button>
                    </CardBody>
                    <CardFooter>{this.props.point}</CardFooter>
                </Card>
            </div>
        );
    }
}

export default showGift;