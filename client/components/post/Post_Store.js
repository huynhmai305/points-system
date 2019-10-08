import React from 'react';
import { Media, Card, CardImg, CardText, CardBody, CardTitle, Row, Col } from 'reactstrap';

const CardComponent = (props) => {
    return (
        <Col xs={12} sm={6} md={3} lg={3}>
            <Card>
                <CardImg top width="100%" src="/static/images/logo_FeelingTea.png" alt="Card image cap" />
                <CardText className="gift">
                    <i className="fa fa-clock-o" aria-hidden="true" />{' '}
                    <span>07:00 - 22:00</span>
                </CardText>
                <CardBody>
                    <Row>
                        <Col href="#" md={2} sm={2} xs={2}>
                            <Media object src="https://via.placeholder.com/30x30" alt="logo" />
                        </Col>
                        <Col>
                            <h5 className="name_store no_margin text-uppercase">Bún đậu Cố Hương</h5>
                            <div className="text-muted font_defaul address">
                                <i className="fa fa-map-marker _location" aria-hidden="true"/>
                                {' '}107 E4 Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng,...
                            </div>
                            <div className="text-muted font_defaul address">
                                <i className="fa fa-tag _tag" aria-hidden="true" />{' '}
                                <a href="#">
                                    Trà sữa
                                </a>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CardComponent;