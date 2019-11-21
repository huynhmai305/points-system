import React, { Component } from 'react'
import { Button, Tooltip } from 'reactstrap';
import Link from 'next/link';
import moment from 'moment'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import {FaHandHoldingUsd} from 'react-icons/fa'

class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tooltipOpen: false,
            Headers : [
              {
                Header: '#',
                accessor: 'id',
                style: {'text-align': 'center'},
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
                Header: 'Điện thoại',
                accessor: 'phone',
                maxwidth: 100
              },
              {
                Header: 'Email',
                accessor: 'email',
                width: 200
              }, 
              {
                Header: 'Điểm',
                accessor: 'point',
                style: {'text-align': 'center'},
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
                    <Link href={"/store/billofcustomer?id_user="+row.original.id}>
                      <Button color="success" id="bill"><FaHandHoldingUsd/></Button>
                    </Link>
                    {/* <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="bill" toggle={this.toggle}>
                      Thêm hóa đơn tích điểm
                    </Tooltip> */}
                  </div>
                ),
                filterable: false
              }, 
            ]
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
          tooltipOpen: !this.state.tooltipOpen
        });
      }

    deleteItem = id => {
        let confirmDelete = window.confirm('Bạn có chắc muốn xóa không?')
        if(confirmDelete){
        // console.log(id)
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
            alert(`Xóa thành công id: ${id}`);
            location.reload();
        })
        .catch(err => console.log(err))
        }
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
