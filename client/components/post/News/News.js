import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, Row, Col } from 'reactstrap';
import DateFormat from 'dateformat'

const News = (props) => {
  const href = props.href + '?id=' + props.id_post
  return (
    <Card className="mb-3" style={{ minWidth: '15rem' }}>
      <CardLink href={href}>
        <CardImg top width="100%" height="150px" src={props.picture ? props.picture : "http://placehold.it/900x450"} alt="Card image cap" />
        <CardBody>
          <p className="text-muted">{DateFormat(props.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
          <p><b>{props.title}</b></p>
        </CardBody>
      </CardLink>
    </Card>
  );
};

export default News;
