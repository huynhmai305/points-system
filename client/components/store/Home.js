import React, { Component } from 'react';
import Store from '../Store';
import Card from './Card';
import Chart from './Chart';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            image:''
        }      
    }
    componentDidMount() {
        var store = JSON.parse(localStorage.getItem('user'));
        this.setState({
            name:store[0].username,
            image: store[0].picture
        })
      }
    
    render() {
        return (
            <Store username={this.state.name} image={this.state.image}>
                <Card />
                <div className="mt-5">
                    <Chart/>
                </div>
            </Store>
        );
    }
}

export default Home;