import React from 'react';
import { Media, Card, CardImg, CardText, CardBody, CardLink, Row, Col } from 'reactstrap';
import {FaClock, FaMapMarkedAlt, FaTag} from 'react-icons/fa'

const CardComponent = (props) => {
  const href = props.href + '?id=' + props.id_post
  return (
    // <Col xs={12} sm={6} md={3} lg={3}>
    <Card className="mb-3" style={{ minWidth: '17rem', maxWidth:'17rem' }}>
      <CardLink href={href}>
        <CardImg top src={props.picture ? props.picture : "/static/images/H&M-Logo.svg"} alt="Card image cap" style={{width:'100%',height:'150px'}}/>
        <CardText className="gift">
          <FaClock/>{' '}
          <span>07:00 - 22:00</span>
        </CardText>
        <CardBody>
          <Row>
            <Col md={2} sm={2} xs={2}>
              <Media object src={props.picture ? props.picture : "http://placehold.it/30x30"} alt="logo" style={{ width: '30px', height: '30px' }} />
            </Col>
            <Col>
              <h5 className="name_store no_margin text-uppercase">{props.name}</h5>
              <div className="text-muted font_defaul address">
                <FaMapMarkedAlt className="_location"/>
                {' '}{props.address}
              </div>
              <div className="text-muted font_defaul address">
                <FaTag className="_tag"/>{' '}
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
