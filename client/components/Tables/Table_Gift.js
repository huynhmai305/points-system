import React, { Component } from 'react'
import { Button } from 'reactstrap';
import ModalForm from '../Modals/ModalGift.js';
import moment from 'moment'
import ReactTable from 'react-table'
import {FaTrashAlt} from 'react-icons/fa'
import Swal from 'sweetalert2'

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Headers : [
        {
          Header: '#',
          Cell: row => (<span>{row.original.id_gift.toUpperCase()}</span>),
          style: {'textAlign': 'center'},
          width: 100
        }, 
        {
          Header: 'Tiêu đề',
          accessor: 'title',
          style: {'whiteSpace': 'unset'},
          maxwidth: 300
        }, 
        {
          Header: 'Nội dung',
          accessor: 'content',
          style: {'whiteSpace': 'unset'},
          width: 250
        }, 
        {
          Header: 'Số lượng',
          accessor: 'quantity',
          style: {'textAlign': 'center'},
          width: 100
        }, 
        {
          Header: 'Điểm đổi',
          accessor: 'point',
          style: {'textAlign': 'center'},
          maxwidth: 100
        },
        {
          id: 'User', 
          Header: 'Cửa hàng',
          accessor: d => d.User.username,
          style: {'whiteSpace': 'unset'},
          width: 150
        },
        {
          Header: 'Ngày đăng ký',
          Cell: row => (<span>{moment(row.original.createdAt).format('DD/MM/YYYY, h:mm:ss a')}</span>),
          style: {'whiteSpace': 'unset'},
          maxwidth: 250,
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
          if (item) {
            Swal.fire('Xóa thành công!','','success')
          }
          location.reload();
        })
        .catch(err => console.log(err))
    })
  }
  render() {
    let {items} = this.props;
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
        defaultPageSize={10}
        className = '-striped'
        defaultSorted={[
          {
            id: "createdAt",
            desc: true
          }
        ]}
      />
    )
  }
}

export default DataTable
