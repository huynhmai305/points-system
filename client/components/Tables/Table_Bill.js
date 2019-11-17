import React, { Component } from 'react'
import dateFormat from 'dateformat';
import NumberFormat from 'react-number-format';
import { TablePagination } from 'react-pagination-table';
import ModalForm from '../Modals/ModalBill'
import { FaTrash } from "react-icons/fa";
import {Button} from 'reactstrap'

class DataTable extends Component {
  deleteItem = id => {
    let confirmDelete = window.confirm('Bạn có chắc muốn xóa không?')
    if (confirmDelete) {
      // console.log(id)
      fetch('http://localhost:3000/users/bill', {
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
  actions = (item)=>{
    return (
      <div style={{ width: "100px" }}>
        <ModalForm buttonLabel='Edit' item={item} updateState={this.props.updateState} />
        {' '}
        <Button color="danger" onClick={() => this.deleteItem(item.id)}><FaTrash/></Button>
      </div>
    )
  }
  render() {
    const Header = ["#", "Tổng tiền", "Mã khách hàng","Tên khách hàng","Mã cửa hàng", "Ngày tạo",""];
    let { items } = this.props;
    items = items.map(item => {
      return {
        ...item,
        createdAt: dateFormat(item.createdAt, "isoDate"),
        total: <NumberFormat value={item.total} displayType={'text'} thousandSeparator={true} suffix={'đ'} />,
        name_user: item.User.username,
        actions : this.actions(item)
      }
    })
    return (
      <TablePagination
        id="table_bill"
        className="table-responsive table-hover thead-light"
        headers={Header}
        data={items}
        columns="id.total.id_user.name_user.id_store.createdAt.actions"
        perPageItemCount={5}
        totalCount={50}
      />
    )
  }
}

export default DataTable
