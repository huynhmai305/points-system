import React, { Component } from './node_modules/react';
var DefaultLayout = require('../layouts/default');

class AddPost extends Component {
    render() {
        return (
            <DefaultLayout title="Add Post">
            <section id="services">
                <form method="POST">
                    <div className="form-group">
                        <label for="title">Tiêu đề</label>
                        <input type="text" id="title" placeholder="Title" className="form-control is-valid" />
                    </div>
                    <div className="md-form">
                        <i className="fas fa-pencil-alt prefix" />
                        <textarea id="Content" className="md-textarea form-control is-valid" placeholder="Content" rows={7} cols={15} defaultValue={""} />
                        <label htmlFor="Content">Nội dung</label>
                    </div>
                    <div className="form-group">
                        <label for="title">Chọn file</label>
                        <input type="file" id="title" placeholder="Title" className="custom-file-control is-valid" />
                    </div>
                </form>
                </section>
            </DefaultLayout>
        );
    }
}

export default AddPost;