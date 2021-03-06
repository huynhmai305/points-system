import React, { Component } from 'react'
import { Button } from 'reactstrap';
import ModalForm from './Modal_Post';
import ModalContent from '../../Modals/ModalViewContent'
import moment from 'moment'
import ReactTable from 'react-table'
import HtmlParser from 'react-html-parser'
import {FaTrashAlt} from 'react-icons/fa'
import Swal from 'sweetalert2'

class PostTableStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Headers: [
        {
          Header: 'Tiêu đề',
          accessor: 'title',
          style: { 'whiteSpace': 'unset' },
          width: 500
        },
        {
          Header: 'Ngày viết bài',
          Cell: row => (<span>{moment(row.original.createdAt).format('DD/MM/YYYY, h:mm:ss a')}</span>),
          style: { 'textAlign': 'center' },
          maxwidth: 100,
          filterable: false
        },
        {
          Header: '',
          Cell: row => (
            <div>
              <Button color="danger" style={{ float: "left", marginRight: "10px" }} onClick={() => this.deleteItem(row.original.id)}><FaTrashAlt/></Button>
              <ModalForm buttonLabel='Edit' item={row.original} />
              <ModalContent title={row.original.title} content={HtmlParser(row.original.content)}/>
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

export default PostTableStore
