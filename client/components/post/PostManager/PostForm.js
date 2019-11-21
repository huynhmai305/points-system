import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, CustomInput, Input, Button, Alert } from 'reactstrap';
import { Editor } from '@tinymce/tinymce-react'
import Select from 'react-select';
import Type from '../../type.json'
const API_KEY = '2icj3szs411s8nqf8kqljxz7cvd2478keun6zro00pdptu17';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],//luu gia tri tra ve tu api store
      options: [],//luu option cua select store
      value: '',
      label: '',
      loading: false,
      error: "",
      type: 'type1',
      post: {
        title: "",
        content: "",
        userId: this.props.userId,
        storeId: '',
        type: ''
      }
    }
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.submitFormAdd = this.submitFormAdd.bind(this);
  }
  //radio option
  handleChangeRadio = e => {
    this.setState({ type: e.target.value })
  }
  //title
  handleFieldChange = event => {
    const { value, name } = event.target;
    this.setState({
      ...this.state,
      post: {
        ...this.state.post,
        [name]: value
      }
    }, () => console.log(this.state.type));
  }

  //content
  handleEditorChange = (content, editor) => {
    this.setState({
      ...this.state,
      post: {
        ...this.state.post,
        content
      }
    }, () => console.log('Content:', content));
  }
  getStore() {
    let url = 'http://localhost:3000/users/optionstore';
    fetch(url)
      .then(response => response.json())
      .then(items => {
        this.setState({ items })
        this.addItem(this.state.items)
      })
      .catch(err => console.log(err))
  }
  addItem(items) {
    items.map((val, key) => {
      key = { key }
      this.setState({
        value: val.id,
        label: val.username
      })
      let item = { 'value': this.state.value, 'label': this.state.label };
      this.state.options.push(item)
      console.log(this.state.options)
    })
  }
  //select linh vuc
  handleChangeType = type => {
    this.setState({
      ...this.state,
      post: {
        ...this.state.post,
        type: type.value
      }
    });
    console.log(`Type selected:`, type.value);
  };
  //select store
  handleChange = id_store => {
    this.setState({
      ...this.state,
      post: {
        ...this.state.post,
        storeId: id_store.value
      }
    });
    console.log(`Option selected:`, id_store.value);
  };
  submitFormAdd(e) {
    e.preventDefault();
    if (!this.isFormValid()) {
      this.setState({ error: "Vui long nhap day du thong tin" });
      return;
    }
    // loading status and clear error
    this.setState({ error: "", loading: true })
    let { post } = this.state
    console.log(post, 'post')
    fetch("http://localhost:3000/users/post", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: post.title,
        content: post.content,
        storeId: post.storeId,
        type: post.type
      })
    })
      .then(response => response.json())
      .then(item => {
        alert(`Thêm bài viết thành công`);
        location.reload()
      })
      .catch(err => {
        this.setState({
          error: "Thêm thất bại",
          loading: false
        });
      });
  }
  submitFormEdit = e => {
    e.preventDefault()
    if (!this.isFormValid()) {
      this.setState({ error: "Vui long nhap day du thong tin" });
      return;
    }
    let { post } = this.state
    fetch('http://localhost:3000/users/post', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: post.id,
        title: post.title,
        content: post.content,
        storeId: post.storeId,
        type: post.type
      })
    })
      .then(response => response.json())
      .then(item => {
        alert(`Chỉnh sửa thành công id: ${this.state.post.id}`);
        location.reload()
      })
      .catch(err => {
        this.setState({
          error: "Chỉnh sửa thất bại",
          loading: false
        });
      });
  }
  isFormValid() {
    return this.state.post.title !== "" && this.state.post.content !== "" && this.state.post.type !== '';
  }
  renderError() {
    return this.state.error ? (
      <Alert color="danger">
        {this.state.error}
      </Alert>
    ) : null;
  }
  componentDidMount() {
    console.log(Type)
    // if item exists, populate the state with proper data
    if (this.props.item) {
      const { id, title, content, storeId, type } = this.props.item
      if (storeId !== null) {
        const { username } = this.props.item.User
        const store_obj = { label: username, value: storeId }
        this.setState({ store_obj })
      }
      const type_obj = Type.filter(t => {
        return t.value === type
      })
      const option = storeId === null ? 'type1' : 'type2'
      this.setState({
        ...this.state,
        type: option,
        type_obj,
        post: {
          ...this.state.post,
          id, title, content, storeId, type
        }
      }, () => console.log(this.state.post.title));
    }
    this.getStore()
  }
  render() {
    const { store_obj, type_obj } = this.state;
    return (
      <Container>
        <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
          {this.renderError()}
          <FormGroup tag="fieldset">
            <legend>Tùy chọn thể loại bài viết</legend>
            <FormGroup check>
              <CustomInput
                type="radio"
                id="type1"
                value="type1"
                name="type"
                label="Viết bài cho chuyên mục"
                checked={this.state.type === 'type1'}
                onClick={this.handleChangeRadio}
              />
              <CustomInput
                type="radio"
                id="type2"
                value="type2"
                name="type"
                label="Viết bài cho cửa hàng"
                checked={this.state.type === 'type2'}
                onClick={this.handleChangeRadio}
              />
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label for="title">Tiêu đề<span style={{ color: 'red' }}> *</span></Label>
            <Input
              type="text"
              id="title"
              name="title"
              placeholder="Nhập tiêu đề"
              onChange={this.handleFieldChange}
              value={this.state.post.title}
              className="form-control"
              valid
            />
          </FormGroup>
          <Label for="content">Nội dung<span style={{ color: 'red' }}> *</span></Label>
          <Editor
            name="content"
            apiKey={API_KEY}
            // initialValue={this.state.post.content}
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
          {this.state.type === 'type2' ? (
            <FormGroup>
              <Label for="store">Chọn cửa hàng</Label>
              <Select
                name="store"
                value={store_obj}
                onChange={this.handleChange}
                options={this.state.options}
              />
            </FormGroup>
          ) : null
          }
          <FormGroup>
            <Label for="linhvuc">Chọn lĩnh vực</Label>
            <Select
              name="linhvuc"
              value={type_obj}
              onChange={this.handleChangeType}
              options={Type}
            />
          </FormGroup>
          <FormGroup>
            <Button color="light" className="float-right mt-3">
              <img src="/static/images/btn_send.png" style={{ width: '50px', height: '50px' }} />
            </Button>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default PostForm;
