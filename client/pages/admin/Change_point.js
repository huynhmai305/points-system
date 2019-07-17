import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
export default class Change_point extends Component {
    state={
        point_change_old: 0,
        point_change:0
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
      }
    getItems =() => {
        fetch('http://localhost:3000/users/point_change')
        .then (response => response.json())
        .then(result =>{
            this.setState({point_change_old:result.point_change})
            console.log(this.state.point_change_old)  
        })
    }
    submitFormEdit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/users/point_change', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            point_change: this.state.point_change
          })
        })
          .then(() => {
            alert(`Chỉnh sửa thành công `);
            location.reload()
          })
      }
    componentDidMount() {
       
        this.getItems('')
    }
    render(){
        return (
            <div className ="container"> 
            <h3>Quy đổi điểm tích lũy</h3>
            <div class="form-group">
              <label for="">Công thức tính điểm tích lũy:</label>
              <strong>Điểm tích lũy = Tổng tiền thanh toán / giá trị quy đổi</strong><br/>
              <label for="">Giá trị quy đổi hiện tại:{this.state.point_change_old}</label><br/>
              <input type="text" name="point_change" onChange={this.onChange} value={this.state.point_change} class="form-control"/>
              <Button color="success" onClick ={this.submitFormEdit}>Submit</Button>
              <small id="helpId" class="text-muted">Help text</small>
            </div>
            </div>
        )
    }
}