import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button, FormFeedback, Toast,ToastHeader,ToastBody, Spinner} from 'reactstrap';
import Router from 'next/router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'email': '',
      'password': '',
      validate: {
        emailState: '',
      },
      msg: '',
      msg_err:'',
      item: [],
      show:false,
      colortoast:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this)
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success'
    } else {
      validate.emailState = 'has-danger'
    }
    this.setState({ validate })
  }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value,
    });
  }
  toggle(){
    this.setState({show: false})
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
        this.setState({
          msg:'Đăng nhập thành công',
          colortoast:'success',
          show:true
        })
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
      .catch(err => {this.setState({
        msg_err:'Vui lòng kiểm tra lại email, password',
        colortoast:'danger',
        show:false
      });
    })
  }

  render() {
    const { email, password } = this.state;
    return (
      <Container className="App">
        <Toast isOpen={this.state.show}>
          <ToastHeader icon={this.state.colortoast} toggle={this.toggle}>
            Thông báo
          </ToastHeader>
          <ToastBody>
          {this.state.msg} {'  '}
          <Spinner color={this.state.colortoast} />
          </ToastBody>
        </Toast>
        <Form className="form" onSubmit={(e) => this.submitForm(e)} method="POST">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={email}
                valid={this.state.validate.emailState === 'has-success'}
                invalid={this.state.validate.emailState === 'has-danger' || email === ''}
                onChange={(e) => {
                  this.validateEmail(e)
                  this.handleChange(e)
                }}
                required
              />
              <FormFeedback valid>
                Nhập email thành công
              </FormFeedback>
              <FormFeedback>
                Vui lòng nhập một email chính xác
              </FormFeedback>
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
                valid={password !== ''}
                invalid={password === ''}
                onChange={(e) => this.handleChange(e)}
              />
              <FormFeedback valid>
                Nhập password thành công
              </FormFeedback>
              <FormFeedback>
                Password không được trống
              </FormFeedback>
            </FormGroup>
          </Col>
          <FormGroup className="mb-3" check>
            <Label check>
              <Input type="checkbox" name="save" defaultChecked />Lưu lại
            </Label>
          </FormGroup>
          <FormGroup>
            <Button color="success" type="submit">
              Đăng nhập
            </Button>
           <div className="text-danger mt-3">{this.state.msg_err}</div>
          </FormGroup>
          <div style={{display:'none'}}>
            <Spinner color="success" />
          </div>  
        </Form>
      </Container>
    )
  }
}

export default Login;