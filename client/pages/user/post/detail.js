import React, { Component} from 'react';
import Post_Detail_Store from '../../../components/customer/PostDetail'
import {useRouter} from 'next/router'

class GetInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    

    filterData = data => {
        const {id_post} = this.props
        return data.filter(post => {
            return post.id == id_post
        })
    }

    getItem() {
        fetch('http://localhost:3000/users/post')
        .then(res => res.json())
        .then(data => {
            const post = this.filterData(data)
            this.setState({data: post})
        })
        .catch(console.error('Khong tim thay ket qua'))
    }
    componentDidMount() {
        this.getItem()
    }
    render() {
        const {data} = this.state
        console.log(data)
        return (
            <div>
                {data.map((item, key) => (
                    <Post_Detail_Store key={key} title={item.title} content={item.content} createdAt={item.createdAt}/>
                ))}
            </div>
        );
    }
}

function Detail() {
    const router = useRouter();
    const id = parseInt(router.query.id);
    console.log(typeof id)
    return (
        <div>
            <GetInfo id_post={id}/>
        </div>
    );
    
}


export default Detail;
