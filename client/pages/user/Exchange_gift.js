import React, { Component } from 'react';
import showGift from '../../components/Forms/showGift';

class Exchange_gift extends Component {
    getItems(keyword) {
        let url = 'http://localhost:3000/users/gift/'+this.state.id_getData;
        if (keyword.length > 0) {
            url = `${url}?keyword=${keyword}`
        }
        fetch(url)
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <showGift/>
            </div>
        );
    }
}

export default Exchange_gift;