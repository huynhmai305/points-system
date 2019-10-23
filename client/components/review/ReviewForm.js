import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Editor } from '@tinymce/tinymce-react'
import StarRatings from 'react-star-ratings';
const API_KEY = '2icj3szs411s8nqf8kqljxz7cvd2478keun6zro00pdptu17';

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: "",
            post: {
                title: "",
                content: "",
                rating: 0,
                userId: this.props.userId,
                storeId: ''
            }
        }
        this.changeRating = this.changeRating.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleFieldChange = event => {
        const { value, name } = event.target;
        this.setState({
            ...this.state,
            post: {
                ...this.state.post,
                [name]: value
            }
        }, () => console.log(this.state.post.title));
    }
    changeRating(newRating) {
        this.setState({
            ...this.state,
            post: {
                ...this.state.post,
                rating: newRating
            }
        },() => console.log('Rating:', this.state.post.rating));
    }
    handleEditorChange = (content, editor) => {
        this.setState({
            ...this.state,
            post: {
                ...this.state.post,
                content
            }
        },() => console.log('Content:', content));
    }
    onSubmit(e) {
        e.preventDefault();
        if (!this.isFormValid()) {
            this.setState({ error: "Vui long nhap day du thong tin" });
            return;
        }
        // loading status and clear error
        this.setState({ error: "", loading: true })
        let { post } = this.state
        console.log(post,'post')
        fetch("http://localhost:3000/review", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.post.title,
                content: this.state.post.content
            })
        })
            .then(response => response.json())
            .then(res => {
                if (res.error) {
                    this.setState({ loading: false, error: res.error })
                } else {
                    // lay time api tra ve gan vao time cua post
                    post.time = res.time;
                    this.props.addPost(post)
                    // clear the message box
                    this.setState({
                        loading: false,
                        post: { ...post, content: "" }
                    });
                }
            })
            .catch(err => {
                this.setState({
                    error: "Loi xay ra khi post",
                    loading: false
                });
            });
    }
    isFormValid() {
        return this.state.post.title !== "" && this.state.post.content !== "";
    }
    renderError() {
        return this.state.error ? (
            <Alert color="danger">
                {this.state.error}
            </Alert>
        ) : null;
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="title">Tiêu đề<span style={{color: 'red'}}> *</span></Label>
                        <Input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Nhập tiêu đề"
                            onChange={this.handleFieldChange}
                            value={this.state.post.title}
                            className="form-control"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="rating">Đánh giá<span style={{color: 'red'}}> *</span></Label>
                        <StarRatings
                            rating={this.state.post.rating}
                            starRatedColor="blue"
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            name='rating'
                        />
                    </FormGroup>
                    <Label for="content">Nội dung<span style={{color: 'red'}}> *</span></Label>
                    <Editor
                        name="content"
                        apiKey={API_KEY}
                        value={this.state.post.content}
                        init={{
                            selector: 'textarea',
                            plugins: ' lists checklist autolink link image media code paste casechange emoticons preview searchreplace',
                            toolbar: 'undo redo | bold italic underline | casechange| alignleft aligncenter alignright alignjustify | checklist numlist bullist | forecolor | backcolor | link image | emoticons | searchreplace | preview | code',
                            toolbar_drawer: 'floating',
                            tinycomments_mode: 'embedded',
                            tinycomments_author: 'Author name'
                        }}
                        onEditorChange={this.handleEditorChange}
                    />
                    {this.renderError()}
                    <FormGroup>
                        <Button color="light" className="float-right mt-3">
                            <img src="/static/images/btn_send.png" style={{width:'50px',height:'50px'}}/>
                        </Button>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

export default ReviewForm;