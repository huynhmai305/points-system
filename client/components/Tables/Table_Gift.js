import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/ModalGift.js';
import dateFormat from 'dateformat';

class DataTable extends Component {

  deleteItem = id => {
    let confirmDelete = window.confirm('Bạn có chắc muốn xóa không?')
    if(confirmDelete){
      // console.log(id)
      fetch('http://localhost:3000/users/gift', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    })
      .then(response => response.json())
      .then(item => {
        alert(`Xóa thành công id: ${id}`);
        location.reload();
      })
      .catch(err => console.log(err))
    }

  }

  render() {

    const items = this.props.items.map(item => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.title}</td>
          <td>{item.content}</td>
          <td>{item.point}</td>
          <td>{dateFormat(item.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
          <td>
            <div style={{width:"100px"}}>
              <ModalForm buttonLabel='Edit' item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.id)}><i className="fas fa-trash-alt"></i></Button>
            </div>
          </td>
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead color="primary">
          <tr>
            <th>#</th>
            <th width={'15%'}>Tiêu đề</th>
            <th width={'15%'}>Nội dung</th>
            <th width={'25%'}>Điểm đổi</th>
            <th width={'15%'}>Điện thoại</th>
            <th width={'30%'}>Ngày đăng ký</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default DataTable