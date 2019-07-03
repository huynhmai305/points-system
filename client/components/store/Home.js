import React, { Component } from 'react';
import Store from '../Store';
import Card from './Card';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : ''
        }      
    }
    componentDidMount() {
        var store = localStorage.getItem('name');
        this.setState({name:store})
      }
    
    render() {
        return (
            <Store username={this.state.name}>
                <Card />
                <div className="row">
                    <img src="/images/logo_AZtea.png" className="rounded-circle offset-md-4 col-4" />
                    <h3 className="text-center col-12" style={{color: '#3c8033'}}>Bắt kịp trào lưu - Dẫn đầu khác biệt</h3>
                </div>
            </Store>
        );
    }
}

export default Home;