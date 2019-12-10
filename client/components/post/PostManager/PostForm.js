import React, { Component } from 'react';
import { Container, FormGroup, Label, Button, Alert } from 'reactstrap';
import dynamic from 'next/dynamic'
import { AvForm, AvField, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
const CKEditor = dynamic(() => import('../../editor/Editor'), {
  ssr: false
})
import Select from 'react-select';
import Type from '../../type.json'
import {FaPaperPlane} from 'react-icons/fa'
import Swal from 'sweetalert2'
//const API_KEY = '2icj3szs411s8nqf8kqljxz7cvd2478keun6zro00pdptu17';

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
        userId: '',
        storeId: this.props.userId,
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
  handleEditorChange = ( event, editor ) => {
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
      type_obj: type,
      post: {
        ...this.state.post,
        type: type.value
      }
    });
    console.log(`Type selected:`, type.value);
  };
  //select store
  handleChange = id_store => {
    console.log(id_store)
    this.setState({
      ...this.state,
      store_obj: id_store,
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
      this.setState({ errorMessage: "Vui lòng chọn thông tin" });
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
        Swal.fire("Thêm bài viết thành công","", "success")
        location.reload()
      })
      .catch(err => {
        Swal.fire("Thêm thất bại","","error")
      });
  }
  submitFormEdit = e => {
    e.preventDefault()
    if (!this.isFormValid()) {
      this.setState({ error: "Vui lòng nhập đầy đủ thông tin" });
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
        Swal.fire(`Chỉnh sửa thành công `,"", "success")
        location.reload()
      })
      .catch(err => {
        Swal.fire("Chỉnh sửa thất bại","","error")
      });
  }
  isFormValid() {
    return this.state.post.content !== "" || this.state.post.storeId !== "";
  }

  renderError() {
    return this.state.error ? (
      <Alert color="danger">
        {this.state.error}
      </Alert>
    ) : null;
  }

  componentDidMount() {
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
        <AvForm onValidSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
          {!this.props.item ? (
            <AvRadioGroup name="type" label="Tùy chọn thể loại bài viết" value={this.state.type}>
              <AvRadio
                customInput
                id="type1"
                value="type1"
                label="Viết bài cho chuyên mục"
                defaultChecked={this.state.type == 'type1'}
                onClick={this.handleChangeRadio}
              /> 
              <AvRadio
                customInput
                id="type2"
                value="type2"
                label="Viết bài cho cửa hàng"
                defaultChecked={this.state.type == 'type2'}
                onClick={this.handleChangeRadio}
              />
            </AvRadioGroup>
          ) : ''}
          <FormGroup>
            <Label for="title">Tiêu đề</Label>
            <AvField
              type="text"
              id="title"
              name="title"
              placeholder="Nhập tiêu đề"
              onChange={this.handleFieldChange}
              value={this.state.post.title}
              className="form-control"
              validate={{
                required: {value: true, errorMessage: 'Vui lòng nhập tiêu đề bài viết'}
              }}
            />
          </FormGroup>
          <Label for="content">Nội dung</Label>
          <CKEditor
            name="content"
            data={this.state.post.content}
            onChange={this.handleEditorChange}
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
              {this.renderError()}
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

export default PostForm;
