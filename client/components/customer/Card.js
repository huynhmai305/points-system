import React, { Component } from 'react';
import CardStore from '../post/PostList'

class Card extends Component {
    render() {
        return (
            <div>
                <CardStore/>
            </div>
        );
    }
}

export default Card;