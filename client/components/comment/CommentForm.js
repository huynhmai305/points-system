import React, { Component } from 'react';
import {Alert, Form, FormGroup, Input, Button} from 'reactstrap'

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: "",
            comment: {
                name: "",
                message: ""
            }
        }
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleFieldChange = event => {
        const {value, name} = event.target;
        this.setState({
            ...this.state,
            comment: {
                ...this.state.comment,
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
        let  {comment} = this.state
        fetch("http://localhost:3000/comment", {
            method: "POST",
            body: JSON.stringify(comment)
        })
        .then(response => response.json())
        .then(res => {
            if(res.error) {
                this.setState({loading: false, error: res.error})
            } else {
                // lay time api tra ve gan vao time cua comment
                comment.time = res.time;
                this.props.addComment(comment)
                // clear the message box
                this.setState({
                    loading: false,
                    comment: { ...comment, message: "" }
                });
            }
        })
        .catch(err => {
            this.setState({
                error: "Loi xay ra khi comment",
                loading: false
            });
        });
    }
    isFormValid() {
        return this.state.comment.name !== "" && this.state.comment.message !== "";
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
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Input 
                            onChange={this.handleFieldChange}
                            value={this.state.comment.name}
                            className="form-control"
                            type="text"  
                            name="name" 
                            placeholder="😎 Your Name" 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            onChange={this.handleFieldChange}
                            value={this.state.comment.message}
                            className="form-control"  
                            type="textarea"  
                            name="message" 
                            placeholder="Your Comment" 
                        />
                    </FormGroup>
                    {this.renderError()}
                    <FormGroup>
                        <Button color="primary" disabled={this.state.loading}>
                            Comment ➤
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default CommentForm;