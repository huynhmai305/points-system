import React, {Component} from 'react';
import { Card, CardText, CardBody, CardTitle, Row, Col, Button } from 'reactstrap';
import StarRatings from 'react-star-ratings';
import moment from 'moment'
import {FaHeart} from 'react-icons/fa'
import HtmlParser from 'react-html-parser'
import Swal from 'sweetalert2'

class CardComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      like: 'secondary'
    }
  }
  
  btnLike = () => {
    this.setState({
      like: 'danger',
      id: this.props.id,
      point: this.props.point + 1
    }, () => {
      console.log('already set point'+this.state.point)
      this.updatePoint(this.state.id, this.state.point);
    })   
  }
  updatePoint = (id, point) => {
    console.log('abcgyugy')
    fetch('http://localhost:3000/users/point', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          point: point
        })
      })
      .then(response => response.json())
      .then(item => {
        Swal.fire(`Bạn vừa tặng 1 điểm cho ${this.props.username}, cảm ơn bạn`,"","info");
      })
  }
  render() {
    const info = JSON.parse(localStorage.getItem('user'));
    const {image, username, rating, content, title, createdAt} = this.props
    return (
      <div className="mb-2">
        <Card>
          <CardBody>
            <Row>
              <Col md={2} sm={2} xs={2}>
                <img src={(image !== null) ? image : "http://ssl.gstatic.com/accounts/ui/avatar_2x.png"} alt="Avatar" style={{width:'60px', height:'60px'}} className="w3-circle"/>
              </Col>
              <Col md={8} sm={8} xs={8}>
                  <CardTitle><b>{username}</b></CardTitle>
                  <Review rate={rating}/>
              </Col>
              <Col>
                <CardText className="float-right">{moment(createdAt).startOf('day').fromNow()}</CardText>
              </Col>
            </Row>
            <CardText><b>{title}</b></CardText>
            <CardText>{HtmlParser(content)}</CardText>
            {info !== null ? (
              <Button color={this.state.like} onClick={this.btnLike}><FaHeart/></Button>
            ) : ''}
          </CardBody>
        </Card>
      </div>
    );
  }
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

