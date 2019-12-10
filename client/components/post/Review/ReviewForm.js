import React, { Component } from 'react';
import { Container, FormGroup, Label, Button, Alert } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import StarRatings from 'react-star-ratings';
import {FaPaperPlane} from 'react-icons/fa'
import Swal from 'sweetalert2'
import dynamic from 'next/dynamic'
const CKEditor = dynamic(() => import('../../editor/Editor'), {
  ssr: false
})


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
        postId: this.props.postId
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
    }, () => console.log('Rating:', this.state.post.rating));
  }
  handleEditorChange = (event, editor) => {
    const content = editor.getData();
    console.log(content)
    this.setState({
      ...this.state,
      post: {
        ...this.state.post,
        content
      }
    }, () => console.log('Content:', content));
  }
  onSubmit(e) {
    e.preventDefault();
    if (!this.isFormValid()) {
      this.setState({ error: "Vui lòng nhập đầy đủ thông tin" });
      return;
    }
    // loading status and clear error
    this.setState({ error: "", loading: true })
    let { post } = this.state
    console.log(post, 'post')
    fetch("http://localhost:3000/users/review", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: post.title,
        content: post.content,
        rating: post.rating,
        userId: post.userId,
        postId: post.postId
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
        Swal.fire("Thêm bài review thất bại","","error")
      });
  }
  isFormValid() {
    return this.state.post.content !== "" || this.state.post.rating !== 0;
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
        <AvForm onValidSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="title">Tiêu đề<span style={{ color: 'red' }}> *</span></Label>
            <AvField
              type="text"
              id="title"
              name="title"
              placeholder="Nhập tiêu đề"
              onChange={this.handleFieldChange}
              value={this.state.post.title}
              className="form-control"
              validate={{
                required: {value: true, errorMessage: 'Vui lòng nhập tiêu đề bài review'}
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="rating">Đánh giá<span style={{ color: 'red' }}> *</span></Label>
            <StarRatings
              rating={this.state.post.rating}
              starRatedColor="blue"
              changeRating={this.changeRating}
              numberOfStars={5}
              name='rating'
              starDimension='30px'
            />
          </FormGroup>
          <Label for="content">Nội dung<span style={{ color: 'red' }}> *</span></Label>
          <CKEditor
            name="content"
            data={this.state.post.content}
            onChange={this.handleEditorChange}
          />
          {this.renderError()}
          <FormGroup>
            <Button color="success" className="float-right mt-3">
              <FaPaperPlane/> Gửi
            </Button>
          </FormGroup>
        </AvForm>
      </Container>
    );
  }
}

export default ReviewForm;
