import React, { Component } from 'react';

class Test_State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/users/tichdiem')
            .then(response => response.json())
            .then(item => {
                this.setState({ items: item });
                console.log(this.state.items)
            })
    }
    render() {
        return (
            <div>
                <div class="container" >
                    <form>
                        <fieldset class="form-group row">
                            {this.state.items.map((item, key) => (
                                <div>
                                    <legend class="col-form-legend col-sm-1-12" key={key}>Ma hoa don</legend>
                                    <div class="col-sm-1-12">
                                        {item.id}
                                    </div>
                                </div>
                            ))}
                        </fieldset>
                        
                    </form>
                </div>
            </div>

        );
    }
}                  

export default Test_State;                            