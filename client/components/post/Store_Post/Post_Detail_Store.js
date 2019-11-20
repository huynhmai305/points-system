import React, { Component } from 'react'
import HtmlParser from 'react-html-parser'
import Type from '../../type.json'
import { FaSearch } from "react-icons/fa";
import DateFormat from 'dateformat'
import Router from 'next/router'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    redirectNews = (id) => {
        // Router.push(`/detail?id=${id}`,`/detail/${id}`)
        return "/detail?id=" + id
    }

    getTinTuc() {
        fetch('http://localhost:3000/users/post')
            .then(res => res.json())
            .then(item => {
                const val = item.filter(i => {
                    return i.storeId === null
                })
                // const items = val.map(v => HtmlParser(v.content))
                this.setState({ items: val }, () => console.log(this.state.items))
            })
    }
    componentDidMount() {
        this.getTinTuc()
    }

    render() {
        const {title, content, createdAt} = this.props
        return (
            <div className="container">
                <div className="row">
                    {/* Post Content Column */}
                    <div className="col-lg-8">
                        <h1 className="mt-4">{title}</h1>
                        <p className="lead text-muted">
                            Người đăng:{' '}H&M
                        </p>
                        <hr />
                        <p className="text-muted">Thời gian: {DateFormat(createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                        <hr />
                        {HtmlParser(content)}
                    </div>
                    {/* Sidebar Widgets Column */}
                    <div className="col-md-4">
                        {/* Search Widget */}
                        <div className="card my-4">
                            <h5 className="card-header">Tìm kiếm</h5>
                            <div className="card-body">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="button"><FaSearch/></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Categories Widget */}
                        <div className="card my-4">
                            <h5 className="card-header">Thể loại</h5>
                            <div className="card-body">
                                <div className="">
                                        <ul className="list-unstyled mb-0 row">
                                            {Type.map((type,key) => (
                                                <li className="col-6" key={key}>
                                                    <a href="#">{type.label}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    
                                </div>
                            </div>
                        </div>
                        {/* Side Widget */}
                        <div className="card my-4">
                            <h5 className="card-header">Tin tức</h5>
                            <div className="card-body">
                                {this.state.items.map((i,key) => (
                                    <p key={key}><a href={this.redirectNews(i.id)}>{i.title}</a></p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.row */}
            </div>
        )
    }
}

export default News

