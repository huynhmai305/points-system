import React, { Component } from 'react';
import {Container, Form, FormGroup, Label, Input, Button} from 'reactstrap';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: "",
            post: {
                title: "",
                content: ""
            }
        }
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleFieldChange = event => {
        const {value, name} = event.target;
        this.setState({
            ...this.state,
            post: {
                ...this.state.post,
                [name]: value
            }
        });
    }
    onSubmit(e) {
        e.preventDefault();
        if(!this.isFormValid()){
            this.setState({error: "Vui long nhap day du thong tin"});
            return;
        }
        // loading status and clear error
        this.setState({error: "",loading: true})
        let  {post} = this.state
        fetch("http://localhost:3000/post", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(response => response.json())
        .then(res => {
            if(res.error) {
                this.setState({loading: false, error: res.error})
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
                        <Label for="title" />
                        <Input 
                            type="text" 
                            id="title" 
                            name="title" 
                            placeholder="Tiêu đề"
                            onChange={this.handleFieldChange}
                            value={this.state.post.title}
                            className="form-control" 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="content" />
                        <Input 
                            type="textarea" 
                            id="content" 
                            name="content" 
                            placeholder="Nội dung" 
                            onChange={this.handleFieldChange}
                            value={this.state.post.content}
                            className="form-control"
                        />
                    </FormGroup>
                    {this.renderError()}
                    <FormGroup>
                        <Button color="primary" className="float-left">
                            <i className="fa fa-hand-o-up" aria-hidden="true"></i>
                        </Button>
                        <Button color="primary" className="float-right">
                            <i className="fa fa-post" aria-hidden="true"> Bình luận</i>
                        </Button>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

export default PostForm;