import React, { Component } from 'react';
import { Container, Col, FormGroup, Button} from 'reactstrap';
import Router from 'next/router';
import Swal from 'sweetalert2'
import { AvForm, AvField } from 'availity-reactstrap-validation';

class Login extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef()
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

  render() {
    const { email, password } = this.state;
    return (
      <Container className="App">
        <AvForm className="form" onValidSubmit={(e) => this.submitForm(e)}>
          <Col>
            <FormGroup>
              <AvField
                type="email"
                name="email"
                label="Email"
                placeholder="myemail@email.com"
                value={email}
                validate={{
                  required: {value: true, errorMessage: 'Vui lòng nhập email'},
                  email: {value: true, errorMessage: 'Email không đúng định dạng'}
                }}
                onChange={(e) => {
                  this.handleChange(e)
                }}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AvField
                type="password"
                name="password"
                label="Password"
                placeholder="********"
                value={password}
                onChange={(e) => this.handleChange(e)}
                validate={{
                  required: {value: true, errorMessage: 'Vui lòng nhập password'},
                  maxLength: {value: 9, errorMessage: 'Password không được vượt quá 9'}
                }}
              />
            </FormGroup>
          </Col>
          <FormGroup>
            <Button color="success" type="submit">
              Đăng nhập
            </Button>
          </FormGroup>
        </AvForm>
      </Container>
    )
  }
}

export default Login;
