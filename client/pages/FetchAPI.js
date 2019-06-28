import React, { Component } from 'react';
import 'isomorphic-fetch';

class FetchAPI extends Component {
    static async getInitialProps () {
        const res = await fetch('https://api.pokemontcg.io/v1/cards?pages=1&pageSize=10');
        const data = await res.json();
        return data;
    }
    render() {
        return (
            <div>
                {this.props.cards.map((card,i)=>(
                    <div key={i} style={{width:200, float:"left"}}>
                        <div style={{margin:10}}>
                            <img src={card.imageUrl} style={{width:160}}/>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default FetchAPI;