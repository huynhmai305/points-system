import React, { Component } from 'react';
import ShowGift from '../../components/Forms/showGift';
import Customer from '../../components/Customer';
import { Container, CardDeck } from 'reactstrap';

class Exchange_gift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      point: '',
      name: '',
      id: '',
      image: ''
    }
  }

  getItems() {
    let url = 'http://localhost:3000/users/giftpoint/' + this.state.point;
    //let url = 'http://localhost:3000/users/gift'
    fetch(url)
      .then(response => response.json())
      .then(items => {
        this.setState({ items })
      })
      .catch(err => console.log(err))
  }
  componentDidMount() {
    var info = JSON.parse(localStorage.getItem('user'));
    var point = info[0].point;
    var name = info[0].username;
    var id = info[0].id;
    let image = info[0].picture;
    this.setState({ point, name, id, image }, () => this.getItems());

  }
  render() {
    const { name, image, point } = this.state
    return (
      <Customer username={name} image={image}>
        <div className="mb-5 float-right mr-2" style={{border:'#01A9DB solid 4px',borderRadius:'5px', padding:'5px'}}>
          <b>Điểm hiện tại: {point}</b>
        </div>
        <Container className="col-12">
          <CardDeck>
          {this.state.items.map((val, key) => (
            <ShowGift key={key}
              id={val.id}
              id_gift={val.id_gift}
              title={val.title}
              content={val.content}
              point={val.point}
              id_user={this.state.id}
              point_user={this.state.point}
              quantity={val.quantity}
            />
          ))}
          </CardDeck>
        </Container>
      </Customer>

    );
  }
}

export default Exchange_gift;
