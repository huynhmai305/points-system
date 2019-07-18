import React, { Component } from 'react'
import { Button } from 'reactstrap';
import ModalForm from '../Modals/ModalGift.js';
import dateFormat from 'dateformat';
import {TablePagination} from 'react-pagination-table'

class DataTable extends Component {
  deleteItem = id => {
    let confirmDelete = window.confirm('Bạn có chắc muốn xóa không?')
    if (confirmDelete) {
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
  actions = (item)=>{
    return (
      <div style={{ width: "100px" }}>
        <ModalForm buttonLabel='Edit' item={item} updateState={this.props.updateState} />
        {' '}
         <Button color="danger" onClick={() => this.deleteItem(item.id)}><i className="fas fa-trash-alt"></i></Button>
      </div>
    )
  }
  render() {
    const Header = ["#","Tiêu đề", "Nội dung", "Số lượng", "Điểm đổi", "Ngày đăng ký" ," "];
    let {items} = this.props;
    items = items.map(item=>{
      return {
        ...item,
        createdAt: dateFormat(item.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT"),
        actions : this.actions(item)
      }
    })

    return (
      <TablePagination
        className="table-responsive table-hover thead-light"
        headers={ Header }
        data={ items }
        columns="id_gift.title.content.quantity.point.createdAt.actions"
        perPageItemCount={3}
        totalCount={50}
      />
    )
  }
}

export default DataTable