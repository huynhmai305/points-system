import React, { Component } from 'react';
import Store from '../Store';
import Card from './Card';
import Chart from './Chart';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : ''
        }      
    }
    componentDidMount() {
        var store = JSON.parse(localStorage.getItem('user'));
        this.setState({name:store[0].username})
      }
    
    render() {
        return (
            <Store username={this.state.name}>
                <Card />
                <div className="mt-5">
                    <Chart/>
                </div>
            </Store>
        );
    }
}

export default Home;