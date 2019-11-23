import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import moment from 'moment'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class Table_Bill_Of_Customer extends Component {
  constructor(props) {
    super(props);
    this.state= {
      point_change:'',
      Headers : [
        {
          Header: 'Mã hóa đơn',
          accessor: 'id',
          style: {'textAlign': 'center'},
          width: 100
        }, 
        {
          Header: 'Tổng hóa đơn',
          Cell: row => (
            <span>
              <NumberFormat value={row.original.total} displayType={'text'} thousandSeparator={true} suffix={'đ'} />
            </span>
          ),
          style: {'textAlign': 'center'},
          maxwidth: 200
        }, 
        {
          Header: 'Điểm được tích lũy',
          accessor: 'point',
          Cell: row => (<span>{row.original.total / 1000}</span>),
          style: {'textAlign': 'center'},
          width: 200
        }, 
        {
          Header: 'Ngày tạo',
          Cell: row => (<span>{moment(row.original.createdAt).format('DD/MM/YYYY, h:mm:ss a')}</span>),
          style: {'whiteSpace': 'unset'},
          maxwidth: 300,
          filterable: false
        }
      ]
    }
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
      />
    )
  }
}

export default Table_Bill_Of_Customer;
