import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/Modal';
import dateFormat from 'dateformat';

class DataTable extends Component {

  deleteItem = id => {
    let confirmDelete = window.confirm('Bạn có chắc muốn xóa không?')
    if(confirmDelete){
      // console.log(id)
      fetch('http://localhost:3000/admin/user', {
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
          <td>{item.username}</td>
          <td>{dateFormat(item.birthday, "isoDate")}</td>
          <td>{item.address}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
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
            <th width={'15%'}>Họ tên</th>
            <th width={'15%'}>Ngày sinh</th>
            <th width={'25%'}>Địa chỉ</th>
            <th width={'15%'}>Điện thoại</th>
            <th width={'10%'}>Email</th>
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