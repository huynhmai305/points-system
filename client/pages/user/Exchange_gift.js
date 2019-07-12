import React, { Component } from 'react';
import ShowGift from '../../components/Forms/showGift';
import Customer from '../../components/Customer';
import {Container} from 'reactstrap';

class Exchange_gift extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            point:'',
            name:'',
            id:''
           
        }
    }
    
    getItems() {
        let url = 'http://localhost:3000/users/giftpoint/'+this.state.point;
        fetch(url)
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log(err))
    }
    componentDidMount() {
        var info = JSON.parse(localStorage.getItem('user'));
        var point = info[0].point;
        var name = info[0].username;
        var id = info[0].id;
        this.setState({point, name, id}, () => this.getItems());

    }
    render() {
        return (
            <Customer username = {this.state.name}>
                <Container className="showgift">
                {this.state.items.map((val, key) => (
                    <ShowGift key={key} 
                        id={val.id}
                        id_gift={val.id_gift} 
                        title={val.title} 
                        content={val.content} 
                        point ={val.point} 
                        id_user= {this.state.id}
                        point_user={this.state.point}
                        quantity={val.quantity}
                    />                
                ))}
                </Container>
            </Customer>
            
        );
    }
}

export default Exchange_gift;