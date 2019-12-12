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
          Header: 'Tiêu đề',
          accessor: 'title',
          style: { 'whiteSpace': 'unset' },
          width: 350
        },
        {
          Header: 'Lĩnh vực',
          accessor: 'type',
          filterMethod: (filter, row) => {
            if (filter.value === "all") {
              return true;
            }
            return filter.value === row._original.type
          },
          Filter: ({ filter, onChange }) =>
            <select
              className='form-control'
              onChange={event => onChange(event.target.value)}
              style={{ width: "100%" }}
              value={filter ? filter.value : "all"}
            >
              <option value="all">Tất cả</option>
              <option value="cafe">Cà phê</option>
              <option value="tra sua">Trà sữa</option>
              <option value="an vat">Ăn vặt</option>
              <option value="thoi trang">Thời trang</option>
              <option value="spa">Spa</option>
              <option value="giai tri">Giải trí</option>
              <option value="dien tu">Điện tử</option>
            </select>
          ,
          style: { 'textAlign': 'center' },
          width: 150
        },
        {
          id: 'User',
          Header: 'Người viết bài',
          accessor: d => (d.User == null ? 'admin' : d.User.username),
          style: { 'textAlign': 'center' },
          width: 150
        },
        {
          Header: 'Ngày viết bài',
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

export default PostTable
