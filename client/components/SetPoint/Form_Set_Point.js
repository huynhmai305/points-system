import React, { Component } from 'react';
import { Container, FormGroup, Label, Button, Alert } from 'reactstrap';
import Select from 'react-select';
import {FaPaperPlane} from 'react-icons/fa'
import Swal from 'sweetalert2'
import { AvForm, AvField } from 'availity-reactstrap-validation';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      options: [],
      loading: false,
      point_change: 0.05
    }
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.submitFormAdd = this.submitFormAdd.bind(this);
  }

  handleFieldChange = event => {
    console.log(event)
    const { value } = event.target;
    this.setState({
      point_change: parseFloat(value)
    }, () => console.log(this.state.point_change));
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
    })
  }

  //select store
  handleChange = obj_store => {
    this.setState({
      store_obj: obj_store,
      id_store: obj_store.value
    });
    console.log(`Option selected:`, obj_store.value);
  };

  submitFormAdd(e) {
    e.preventDefault();
    if (!this.isFormValid()) {
      this.setState({ error: "Vui lòng nhập đầy đủ thông tin" });
      return;
    }
    // loading status and clear error
    this.setState({ loading: true })
    let { point_change, id_store } = this.state
    fetch("http://localhost:3000/users/point_change", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        point_change,
        id_store
      })
    })
      .then(response => response.json())
      .then(item => {
        Swal.fire("Thêm giá trị quy đổi cho cửa hàng thành công","", "success")
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
    let { point_change, id_store } = this.state
    console.log(point_change, id_store)
    fetch('http://localhost:3000/users/point_change', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        point_change,
        id_store
      })
    })
      .then(response => response.json())
      .then(item => {
        Swal.fire(`Chỉnh sửa giá trị quy đổi thành công `,"", "success")
        location.reload()
      })
      .catch(err => {
        Swal.fire(`Chỉnh sửa thất bại`,"", "error")
      });
  }

  isFormValid() {
    return this.state.id_store !== "";
  }

  componentDidMount() {
    // if item exists, populate the state with proper data
    if (this.props.item) {
      const { point_change, id_store } = this.props.item
      const { username } = this.props.item.User
      const store_obj = { label: username, value: id_store }
      this.setState({point_change, id_store, store_obj});
    }
    this.getStore()
  }
  render() {
    const { store_obj, point_change } = this.state;
    return (
      <Container>
        <AvForm onValidSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
          <FormGroup>
            <Label for="point_change">Giá trị quy đổi điểm<span style={{ color: 'red' }}> *</span></Label>
            <AvField
              type="number"
              min={0.01}
              max={1}
              step="0.01"
              id="point_change"
              name="point_change"
              placeholder="Nhập tiêu đề"
              onChange={this.handleFieldChange}
              value={point_change != null ? point_change : 0.05}
              className="form-control"
              validate={{
                number: {value: true, errorMessage: 'Vui lòng nhập định dạng số'},
                required: {value: true, errorMessage: 'Vui lòng nhập giá trị thiết lập quy đổi'}
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="store">Chọn cửa hàng</Label>
            <Select
              name="store"
              value={store_obj}
              onChange={this.handleChange}
              options={this.state.options}
            />
          </FormGroup>
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
