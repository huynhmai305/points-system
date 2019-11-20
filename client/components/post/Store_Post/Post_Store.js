import React from 'react';
import { Media, Card, CardImg, CardText, CardBody, CardLink, Row, Col } from 'reactstrap';

const CardComponent = (props) => {
    const href = props.href + '?id=' + props.id_post
    return (
        // <Col xs={12} sm={6} md={3} lg={3}>
                <Card className="mb-3" style={{minWidth: '10rem'}}>
                    <CardLink href={href}>
                        <CardImg top width="100%" height="150px" src={props.picture ? props.picture : "http://placehold.it/900x450"} alt="Card image cap" />
                        <CardText className="gift">
                            <i className="fa fa-clock-o" aria-hidden="true" />{' '}
                            <span>07:00 - 22:00</span>
                        </CardText>
                        <CardBody>
                            <Row>
                                <Col md={2} sm={2} xs={2}>
                                    <Media object src={props.picture ? props.picture : "http://placehold.it/30x30"} alt="logo" style={{width:'30px',height:'30px'}}/>
                                </Col>
                                <Col>
                                    <h5 className="name_store no_margin text-uppercase">{props.name}</h5>
                                    <div className="text-muted font_defaul address">
                                        <i className="fa fa-map-marker _location" aria-hidden="true"/>
                                        {' '}{props.address}
                                    </div>
                                    <div className="text-muted font_defaul address">
                                        <i className="fa fa-tag _tag" aria-hidden="true" />{' '}
                                        {props.type}
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </CardLink>
                </Card>
        // </Col>
    );
};

export default CardComponent;
