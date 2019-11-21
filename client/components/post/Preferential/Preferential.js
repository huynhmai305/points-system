import React, { Component } from 'react';
import { Media, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import {FaClock} from 'react-icons/fa'
class Preferential extends Component {
  render() {
    return (
      <Col md={3} sm={6} xs={12} >
        <Card>
          <div className="hidden">
            <CardImg top width="100%" src="https://via.placeholder.com/300x150/?Text=WebsiteBuilders.com" alt="Card image cap" />
            <CardText className="gift">Đi 4 tính tiền 3</CardText>
            <CardText className="time_gift">
              <FaClock/>
              <span>7 ngày</span>
            </CardText>
            <div className="overlay">
              <div className="text">Chỉ 20k/suất bún đậu</div>
            </div>
          </div>
          <CardBody>
            <CardTitle>
              <span className="title_caption ">Độc quyền</span>
              <span className="_title_caption">ĐI 4 TRẢ TIỀN 3 - ĂN BÚN ĐẬU PHÊ PHA</span>
            </CardTitle>
            <hr />
            <Row>
              <Col href="#" md={2} sm={2} xs={2}>
                <Media object src="https://via.placeholder.com/30x30" alt="logo" />
              </Col>
              <Col>
                <h6 className="name_store no_margin text-uppercase">Bún đậu Cố Hương</h6>
                <h6 className="text-muted font_defaul address">107 E4 Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng,...</h6>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Preferential;
