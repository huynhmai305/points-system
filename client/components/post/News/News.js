import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, Row, Col } from 'reactstrap';
import DateFormat from 'dateformat'

const News = (props) => {
    const href = props.href + '?id=' + props.id_post
    return (
        <Col xs={12} sm={6} md={3} lg={3}>
            <Card>
                <CardLink href={href}>
                    <CardImg top width="100%" height="150px" src={props.picture ? props.picture : "http://placehold.it/900x450"} alt="Card image cap" />
                    <CardBody>
                        <p className="text-muted">{DateFormat(props.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                        <p><b>{props.title}</b></p>
                    </CardBody>
                </CardLink>
            </Card>
        </Col>
    );
};

export default News;
