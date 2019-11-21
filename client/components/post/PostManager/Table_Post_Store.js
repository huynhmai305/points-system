import React, { Component } from 'react'
import { Button } from 'reactstrap';
import ModalForm from './Modal_Post';
import moment from 'moment'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import HtmlParser from 'react-html-parser'
import {FaTrashAlt} from 'react-icons/fa'

class PostTableStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Headers: [
        {
          Header: '#',
          accessor: 'id',
          style: { 'text-align': 'center' },
          width: 50
        },
        {
          Header: 'Tiêu đề',
          accessor: 'title',
          style: { 'whiteSpace': 'unset' },
          maxwidth: 150
        },
        {
          Header: 'Nội dung',
          Cell: row => (
            <span>
              {HtmlParser(row.original.content.slice(0, 500) + ' <a href="#">Xem chi tiết >></a>')}
            </span>
          ),
          style: { 'whiteSpace': 'unset' },
          width: 500
        },
        {
          id: 'User',
          Header: 'Cửa hàng',
          accessor: d => d.User.username,
          style: { 'text-align': 'center' },
          width: 150
        },
        {
          Header: 'Ngày đăng ký',
          Cell: row => (<span>{moment(row.original.createdAt).format('DD/MM/YYYY, h:mm:ss a')}</span>),
          style: { 'whiteSpace': 'unset' },
          maxwidth: 100,
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
    let confirmDelete = window.confirm('Bạn có chắc muốn xóa không?')
    if (confirmDelete) {
      // console.log(id)
      fetch('http://localhost:3000/users/post', {
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
    let { items } = this.props;
    const data = items.filter(dt => {
      return dt.User !== null
    })
    return (
      <ReactTable
        filterable={true}
        previousText='Trang trước'
        nextText='Trang sau'
        noDataText='Không tìm thấy'
        pageText='Trang'
        rowsText=''
        data={data}
        columns={this.state.Headers}
      />
    )
  }
}

export default PostTableStore
