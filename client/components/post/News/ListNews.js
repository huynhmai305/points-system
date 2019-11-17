import React, { Component } from 'react';
import News from './News'
import {Row, CardDeck} from 'reactstrap'

class ListNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    filterData = data => {
        if(this.props.type == 'all') {
            return data.filter(post => {
                return post.User == null
            })
        } else {
            return data.filter(post => {
                return post.User == null && post.type == this.props.type
            })
        }
    }
    getPost() {
        fetch('http://localhost:3000/users/post')
        .then(res => res.json())
        .then(data => {
            const post = this.filterData(data)
            this.setState({data: post})
        })
        .catch(console.error('Khong tim thay ket qua'))
    }
    componentDidMount() {
        this.getPost()
    }
    render() {
        const {data} = this.state
        return (
            <Row>
                <div className="mt-3">
                    <h5 className="col-12">Có {data.length} kết quả phù hợp</h5>
                    <CardDeck>
                    {data.map((news,key) => (
                        <News 
                            key={key}
                            title={news.title}
                            createdAt={news.createdAt}
                            type={news.type}
                            id_post={news.id}
                            href="/user/post/news"
                        />
                    ))}
                    </CardDeck>
                </div>
            </Row>
        );
    }
}

export default ListNews;
