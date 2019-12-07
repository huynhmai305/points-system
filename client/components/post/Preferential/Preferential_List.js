import React, { Component } from 'react';
import Preferential from './Preferential'
import {CardDeck} from 'reactstrap'

class Preferential_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  getPost() {
    fetch('http://localhost:3000/users/gift')
      .then(res => res.json())
      .then(data => {
        this.setState({ data })
      })
      .catch(console.error('Khong tim thay ket qua'))
  }
  componentDidMount() {
    this.getPost()
  }
  render() {
    return (
      <div>
        <CardDeck>
          {this.state.data.map((item,key) => (
            <Preferential
              key={key}
              point={item.point}
              title={item.title}
              content={item.content}
              quantity={item.quantity}
              name={item.User.username}
              address={item.User.address}
            />
          ))}
        </CardDeck>
      </div>
    );
  }
}

export default Preferential_List;
