import React, { Component } from 'react'
import { Button } from 'reactstrap';
import ModalForm from '../Modals/Modal';
import moment from 'moment'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2'

class DataTable extends Component {
    state = {
      Headers : [
        {
          Header: '#',
          accessor: 'id',
          style: {'textAlign': 'center'},
          width: 50
        }, 
        {
          Header: 'Họ tên',
          accessor: 'username',
          style: {'whiteSpace': 'unset'},
          maxwidth: 150
        }, 
        {
          Header: 'Ngày sinh',
          Cell: row => (<span>{moment(row.original.birthday).format('DD/MM/YYYY')}</span>),
          maxwidth: 100,
          filterable: false
        }, 
        {
          Header: 'Địa chỉ',
          accessor: 'address',
          style: {'whiteSpace': 'unset'},
          width: 200
        }, 
        {
          Header: 'Email',
          accessor: 'email',
          width: 200
        }, 
        {
          Header: 'Điện thoại',
          accessor: 'phone',
          maxwidth: 100
        },
        {
          Header: 'Điểm',
          accessor: 'point',
          style: {'textAlign': 'center'},
          maxwidth: 50
        }, 
        {
          Header: 'Ngày đăng ký',
          Cell: row => (<span>{moment(row.original.createdAt).format('DD/MM/YYYY, h:mm:ss a')}</span>),
          style: {'whiteSpace': 'unset'},
          maxwidth: 200,
          filterable: false
        }, 
        {
          Header: '',
          Cell: row => (
            <div>
              <Button color="danger" style={{float: "left", marginRight:"10px"}} onClick={() => this.deleteItem(row.original.id)}><FaTrashAlt/></Button>
              <ModalForm buttonLabel='Edit' item={row.original}/>
            </div>
          ),
          filterable: false
        }, 
      ]
    }

  deleteItem = id => {
    Swal.fire({
      title: 'Bạn có chắc muốn xóa không?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Hủy',
      confirmButtonText: 'Xóa'
    })
    .then((result) => {
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
          if (item) {
            Swal.fire('Xóa thành công!','','success')
          }
          location.reload();
        })
        .catch(err => console.log(err))
    })
  }
  render() {
    const {items} = this.props
    return (
      <ReactTable
        filterable = {true}
        previousText = 'Trang trước'
        nextText = 'Trang sau'
        noDataText = 'Không tìm thấy'
        pageText = 'Trang'
        rowsText = ''
        data={items}  
        columns={this.state.Headers}
      />
    )
  }
}

export default DataTable
