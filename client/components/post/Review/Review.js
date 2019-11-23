import React from 'react';
import { Card, CardText, CardBody, CardTitle, Row, Col, Button } from 'reactstrap';
import StarRatings from 'react-star-ratings';
import moment from 'moment'
import {FaHeart} from 'react-icons/fa'
import HtmlParser from 'react-html-parser'

const CardComponent = (props) => {
  const info = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="mb-2">
      <Card>
        <CardBody>
          <Row>
            <Col md={2} sm={2} xs={2}>
              <img src={(props.image !== null) ? props.image : "http://ssl.gstatic.com/accounts/ui/avatar_2x.png"} alt="Avatar" style={{width:'60px', height:'60px'}} className="w3-circle"/>
            </Col>
            <Col md={8} sm={8} xs={8}>
                <CardTitle><b>{props.username}</b></CardTitle>
                <Review rate={props.rating}/>
            </Col>
            <Col>
              <CardText className="float-right">{moment(props.createdAt).startOf('day').fromNow()}</CardText>
            </Col>
          </Row>
          <CardText><b>{props.title}</b></CardText>
          <CardText>{HtmlParser(props.content)}</CardText>
          {info !== null ? (
            <Button color="danger"><FaHeart/></Button>
          ) : ''}
        </CardBody>
      </Card>
    </div>

  );
};

class Review extends React.Component {
  state = {
    rating: this.props.rate
  }
  changeRating( newRating, name ) {
    this.setState({
      rating: newRating
    })
  }
  render() {
    return (
      <div>
        <StarRatings
          rating={this.state.rating}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
          starDimension='30px'
          disabled={true}
        />
      </div>
    );
  }
}

export default CardComponent;
