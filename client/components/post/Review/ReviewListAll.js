import React, { Component} from 'react';
import moment from 'moment'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import {FaTrashAlt} from 'react-icons/fa'
import {Button} from 'reactstrap'
import HtmlParser from 'react-html-parser'
import ModalContent from '../../Modals/ModalViewContent'
import Swal from 'sweetalert2'

class ReviewList extends Component {
  state = {
    items: [],
    Headers : [
      {
        Header: '#',
        accessor: 'id',
        style: {'textAlign': 'center'},
        width: 50
      }, 
      {
        Header: 'Tiêu đề',
        accessor: 'title',
        style: {'textAlign': 'center'},
        maxwidth: 100
      }, 
      // {
      //   Header: 'Nội dung',
      //   Cell: row => (<span>{HtmlParser(row.original.content)}</span>),
      //   style: {'whiteSpace': 'unset'},
      //   width: 250
      // }, 
      {
        Header: 'Đánh giá',
        Cell: row => (<span>{row.original.rating}/5</span>) ,
        style: {'textAlign': 'center'},
        width: 150,
        filterable: false
      }, 
      {
        id: 'User',
        Header: 'Người review',
        accessor: d => d.User.username,
        style: {'textAlign': 'center'},
        width: 300
      },
      {
        Header: 'Thời gian tạo',
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
            <ModalContent title={row.original.title} content={HtmlParser(row.original.content)} rating={row.original.rating}/>
          </div>
        ),
        filterable: false
      }, 
    ]
  }
  getItems() {
    let url = 'http://localhost:3000/users/review';
    fetch(url)
      .then(response => response.json())
      .then(items => this.setState({ items }))
      .catch(err => console.log(err))
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
      fetch('http://localhost:3000/users/review', {
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

  componentDidMount() {
    this.getItems()
  }
  render() {
    const {items} = this.props
    console.log('props',items)
    return (
      <div>
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
      </div>
    );
  }
}
export default ReviewList;
