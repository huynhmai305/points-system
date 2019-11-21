import React, { Component } from 'react'
import { Button } from 'reactstrap';
import ModalForm from '../Modals/ModalGift.js';
import moment from 'moment'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import {FaTrashAlt} from 'react-icons/fa'

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Headers : [
        {
          Header: '#',
          Cell: row => (<span>{row.original.id_gift.toUpperCase()}</span>),
          style: {'text-align': 'center'},
          width: 100
        }, 
        {
          Header: 'Tiêu đề',
          accessor: 'title',
          style: {'whiteSpace': 'unset'},
          maxwidth: 250
        }, 
        {
          Header: 'Nội dung',
          accessor: 'content',
          style: {'whiteSpace': 'unset'},
          width: 300
        }, 
        {
          Header: 'Số lượng',
          accessor: 'quantity',
          style: {'text-align': 'center'},
          width: 100
        }, 
        {
          Header: 'Điểm đổi',
          accessor: 'point',
          style: {'text-align': 'center'},
          maxwidth: 100
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
      />
    )
  }
}

export default DataTable
