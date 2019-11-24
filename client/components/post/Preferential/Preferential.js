import React, { Component } from 'react';
import { Media, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import {FaClock} from 'react-icons/fa'
class Preferential extends Component {
  render() {
    const {point, title, content, quantity, name, address} = this.props
    return (
      <Card className="mb-3" style={{ minWidth: '17rem', maxWidth:'17rem' }}>
        <div className="hidden">
          <CardImg top src="/static/images/btn_gift.png" alt="Card image cap" style={{width:'100%',height:'150px'}}/>
          <CardText className="gift">Điểm đổi: {point}</CardText>
          <div className="overlay">
          <div className="text">{content}</div>
          </div>
        </div>
        <CardBody>
          <CardTitle>
            <span className="title_caption ">Số lượng: {quantity}</span>
            <span className="_title_caption">{title}</span>
          </CardTitle>
          <hr />
          <Row>
            <Col>
              <h6 className="name_store no_margin text-uppercase">{name}</h6>
              <h6 className="text-muted font_defaul address">{address}</h6>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default Preferential;
