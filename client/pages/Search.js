import React, { Component } from 'react';

const data=['Sri Lanka','Japan','America','Australia','Canada', 'Russia']

class ExampleSearch extends Component {
    constructor(props) {
        super(props);
        this.state= {
            searchString:''
        }
        
    }
    handleChange = (e) => {
        this.setState({searchString: e.target.value})
    }
    render(){
        var data = this.props.items,
        searchString = this.state.searchString.trim().toLowerCase();
        if(searchString.length>0){
            data = data.filter(l => {
                return l.toLowerCase().math(searchString)
            });
        }
        return (
            <div>
                <input 
                type="text" 
                id="search" 
                name="search" 
                placeholder="Nội dung tìm kiếm..."
                value={this.state.searchString}
                onChange={this.onChange}
                />
                <ul>
                {
                    data.map( l => {
                        <li>{l}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}

class Search extends Component {
    render() {
        return (
            <div>
                <ExampleSearch items={data}/>
            </div>
        );
    }
}

export default Search;
