import React, { Component } from 'react'
import { Button } from 'reactstrap';
import ModalForm from './Modal_Set_Point';
import moment from 'moment'
import ReactTable from 'react-table'
import {FaTrashAlt} from 'react-icons/fa'
import Swal from 'sweetalert2'

class TableListSetPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Headers: [
        {
          id: 'User',
          Header: 'Cửa hàng',
          accessor: d => d.User.username,
          style: { 'textAlign': 'center' },
          width: 300
        },
        {
          Header: 'Giá trị quy đổi điểm thưởng',
          accessor: 'point_change',
          style: { 'textAlign': 'center' },
          width: 400
        },
        {
          Header: 'Ngày đăng ký',
          Cell: row => (<span>{moment(row.original.createdAt).format('DD/MM/YYYY, h:mm:ss a')}</span>),
          style: { 'whiteSpace': 'unset' },
          maxwidth: 200,
          filterable: false
        },
        {
          Header: '',
          Cell: row => (
            <div>
              <Button color="danger" style={{ float: "left", marginRight: "10px" }} onClick={() => this.deleteItem(row.original.id)}><FaTrashAlt/></Button>
              <ModalForm buttonLabel='Edit' item={row.original} />
            </div>
          ),
          filterable: false
        },
      ]
    }
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
      fetch('http://localhost:3000/users/point_change', {
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
    let { items } = this.props;
    return (
      <ReactTable
        filterable={true}
        previousText='Trang trước'
        nextText='Trang sau'
        noDataText='Không tìm thấy'
        pageText='Trang'
        rowsText=''
        data={items}
        columns={this.state.Headers}
        defaultPageSize={10}
        className = '-striped'
      />
    )
  }
}

export default TableListSetPoint
