import React, { Component } from 'react';
import Layout from '../components/layouts/Layout';
// import ImagesUploader from 'react-images-uploader';
// import '../../node_modules/react-images-uploader/styles.css';
// import '../../node_modules/react-images-uploader/font.css';

class Test_State extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            images: '',
        }
    }
    getInfo(){
        fetch('http://localhost:3000/getinfo/74')
        .then(response => response.json())
        .then(info => {
            console.log(info[0].picture)
            this.setState({image:info[0].picture})
        })
    }
    componentDidMount() {
        this.getInfo()
    }
         
    render() {
        return (
            <div>
                <img src={this.state.image} />
            </div>
        );
    }
}

export default Test_State;