import React, { Component } from 'react';
import { Container, Col, FormGroup, Label, Button, FormFeedback, Toast,ToastHeader,ToastBody, Spinner} from 'reactstrap';
import Router from 'next/router';
import Swal from 'sweetalert2'
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';

const required = (value) => {
  if (isEmpty(value)) {
      return <small className="form-text text-danger">Vui lòng nhập thông tin</small>;
  }
}

const validateEmail = (value) => {
  if (!isEmail(value)) {
    return <small className="form-text text-danger">{value} không phải email hợp lệ</small>;
  }
}

const maxLength = (value) => {
  if (value.toString().trim().length > 9) {
    return <small className="form-text text-danger">Password không vượt quá 9 kí tự</small>;
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.form.validateAll();
    if ( this.checkBtn.context._errors.length === 0 ) {
      console.log(`Email: ${this.state.email} va password: ${this.state.password}`)
      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
        .then(response => response.json())
        .then(item => {
          Swal.fire(`Đăng nhập thành công`,"", "success")
          .then (rs => {
            localStorage.setItem('user', JSON.stringify(item))
            let role = item[0].role;
            if (role === 0) {
              Router.push('/admin')
            } else if (role === 1) {
              Router.push('/store')
            } else {
              Router.push('/user')
            }
          })
        })
        .catch(err => {
          console.log(err)
          Swal.fire("Thất bại","Vui lòng kiểm tra lại email, password","error")
        })
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <Container className="App">
        <Form className="form" onSubmit={(e) => this.submitForm(e)} ref={c => { this.form = c }}>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={email}
                validations={[required, validateEmail]}
                onChange={(e) => {
                  this.handleChange(e)
                }}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={password}
                onChange={(e) => this.handleChange(e)}
                validations={[required, maxLength]}
              />
            </FormGroup>
          </Col>
          <FormGroup>
            <Button color="success" type="submit">
              Đăng nhập
            </Button>
            <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
          </FormGroup>
        </Form>
      </Container>
    )
  }
}

export default Login;
