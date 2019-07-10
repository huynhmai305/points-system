import React, { Component } from 'react'
import { Table, Button, Tooltip } from 'reactstrap';
import ModalForm from '../Modals/Modal';
import dateFormat from 'dateformat';
import Link from 'next/link';

class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state={
            tooltipOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
          tooltipOpen: !this.state.tooltipOpen
        });
      }

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
          <td>{item.point}</td>
          <td>{dateFormat(item.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
          <td>
            <div style={{width:"150px"}}>
              <ModalForm buttonLabel='Edit' item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.id)}><i className="fas fa-trash-alt"></i></Button> {' '}
              <Link href={"/store/billofcustomer?id_user="+item.id}><Button color="success" id="bill"><i className="fas fa-money-bill-alt"></i></Button></Link>
              <Tooltip placement="top" isOpen={this.state.tooltipOpen} autohide={false} target="bill" toggle={this.toggle}>
                    Thêm hóa đơn tích điểm
              </Tooltip>
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
            <th width={'20%'}>Họ tên</th>
            <th width={'15%'}>Ngày sinh</th>
            <th width={'15%'}>Địa chỉ</th>
            <th width={'15%'}>Điện thoại</th>
            <th width={'10%'}>Email</th>
            <th width={'5%'}>Điểm</th>
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