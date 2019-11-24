import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, Row, Col } from 'reactstrap';
import DateFormat from 'dateformat'

const News = (props) => {
  const href = props.href + '?id=' + props.id_post
  return (
    <Card className="mb-3" style={{ minWidth: '17rem', maxWidth:'17rem' }}>
      <CardLink href={href}>
        <CardImg top width="100%" height="150px" src={props.picture ? props.picture : "/static/images/H&M-Logo.svg"} alt="Card image cap" style={{width:'100%',height:'150px'}}/>
        <CardBody>
          <p className="text-muted">{DateFormat(props.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
          <p><b>{props.title}</b></p>
        </CardBody>
      </CardLink>
    </Card>
  );
};

export default News;
