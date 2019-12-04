import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const Reader = dynamic(() => import('react-qr-reader'))

class ReadQR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'no result'
        }
    }
    handleScan = data => {
        if (data) {
            this.setState({ data },() => this.props.handleData(this.state.data))
        }
    }
    handleError = err => {
        console.error(err)
    }
    render() {
        return (
            <div>
                <Reader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: '300px', height: '300px' }}
                />
                <p>{this.state.data}</p>
            </div>
        );
    }
}

export default ReadQR;
