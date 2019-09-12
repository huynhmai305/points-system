import React, { Component } from 'react';
import { Input } from 'reactstrap'

class Test_State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/local')
            .then(res => res.json())
            .then(data => this.setState({ data }))
    }
    render() {
        return (
            <div>
                <Input type="select" name="select1">
                    {this.state.data.map((item, key) => (
                        <option key={key}>{item.name}</option>                
                    ))}
                </Input>
                
            </div>
        );
    }
}

export default Test_State;