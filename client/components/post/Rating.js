import React, { Component } from 'react';
import Rating from 'react-rating';
// var Rating = require('react-rating');

class Rate extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({ value: null });
    }

    render() {  
        return (
            <div>
                {/* <Rating
                    initialRating={this.state.value}
                    onClick={this.handleClick}
                    stop={5}    
                    emptySymbol={[
                        'fa fa-star-o fa-2x low',
                        'fa fa-star-o fa-2x low', 
                        'fa fa-star-o fa-2x medium',
                        'fa fa-star-o fa-2x high', 
                        'fa fa-star-o fa-2x high'
                    ]}
                    fullSymbol={[
                        'fa fa-star fa-2x low',
                        'fa fa-star fa-2x low',
                        'fa fa-star fa-2x medium',
                        'fa fa-star fa-2x medium',
                        'fa fa-star fa-2x high', 
                        'fa fa-star fa-2x high']}
                /> */}
                <Rating/>
            </div>
        );
    }
}

export default Rate;