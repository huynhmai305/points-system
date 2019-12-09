import React, { Component } from 'react'
import { Button } from 'reactstrap';
import ModalForm from './Modal_Post';
import moment from 'moment'
import ReactTable from 'react-table'
import ModalContent from '../../Modals/ModalViewContent'
import HtmlParser from 'react-html-parser'
import {FaTrashAlt} from 'react-icons/fa'
import Swal from 'sweetalert2'

class PostTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Headers: [
        {
          Header: '#',
          accessor: 'id',
          style: { 'textAlign': 'center' },
          width: 100
        },
        {
          Header: 'Tiêu đề',
          accessor: 'title',
          style: { 'whiteSpace': 'unset' },
          width: 350
        },
        // {
        //   Header: 'Nội dung',
        //   Cell: row => (
        //     <span>
        //       {HtmlParser(row.original.content.slice(0, 500) + ' <a href="#" onClick={}>Xem chi tiết >></a>')}
        //     </span>
        //   ),
        //   style: { 'whiteSpace': 'unset' },
        //   width: 500
        // },
        {
          id: 'User',
          Header: 'Cửa hàng',
          accessor: d => (d.User == null ? '' : d.User.username),
          style: { 'textAlign': 'center' },
          width: 150
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

export default PostTable
