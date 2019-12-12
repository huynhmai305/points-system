import React, { Component } from 'react'
import NumberFormat from 'react-number-format';
import ModalForm from '../Modals/ModalBill'
import { FaTrash } from "react-icons/fa";
import {Button} from 'reactstrap'
import moment from 'moment'
import ReactTable from 'react-table'
import Swal from 'sweetalert2'

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Headers : [
        {
          Header: '#',
          accessor: 'id',
          style: {'textAlign': 'center'},
          width: 100
        }, 
        {
          Header: 'Mã khách hàng',
          accessor: 'id_user',
          style: {'textAlign': 'center'},
          maxwidth: 150
        }, 
        {
          id: 'User', 
          Header: 'Tên khách hàng',
          accessor: d => d.User.username,
          style: {'whiteSpace': 'unset'},
          width: 250
        }, 
        {
          Header: 'Mã cửa hàng',
          accessor: 'id_store',
          style: {'textAlign': 'center'},
          width: 100
        }, 
        {
          Header: 'Tổng tiền',
          Cell: row => (
            <span>
              <NumberFormat value={row.original.total} displayType={'text'} thousandSeparator={true} suffix={'đ'} />
            </span>
          ),
          style: {'textAlign': 'center'},
          maxwidth: 100,
          filterable: false
        },
        {
          Header: 'Ngày tạo',
          Cell: row => (<span>{moment(row.original.createdAt).format('DD/MM/YYYY, h:mm:ss a')}</span>),
          style: {'whiteSpace': 'unset'},
          maxwidth: 300,
          filterable: false
        }, 
        // {
        //   Header: '',
        //   Cell: row => (
        //     <div>
        //       <Button color="danger" style={{float: "left", marginRight:"10px"}} onClick={() => this.deleteItem(row.original.id)}><FaTrash/></Button>
        //       <ModalForm buttonLabel='Edit' item={row.original}/>
        //     </div>
        //   ),
        //   filterable: false
        // }, 
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
