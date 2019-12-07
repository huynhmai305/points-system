import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import moment from 'moment'
import ReactTable from 'react-table'

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
          width: 150
        }, 
        {
          Header: 'Tổng hóa đơn',
          Cell: row => (
            <span>
              <NumberFormat value={row.original.total} displayType={'text'} thousandSeparator={true} suffix={'đ'} />
            </span>
          ),
          style: {'textAlign': 'center'},
          maxwidth: 200,
          filterable: false
        }, 
        {
          Header: 'Điểm được tích lũy',
          accessor: 'point',
          Cell: row => (<span>{row.original.total / 1000}</span>),
          style: {'textAlign': 'center'},
          width: 200,
          filterable: false
        }, 
        {
          Header: 'Ngày tạo',
          Cell: row => (<span>{moment(row.original.createdAt).format('DD/MM/YYYY, h:mm:ss a')}</span>),
          style: {'textAlign': 'center'},
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
        defaultPageSize={10}
        className = '-striped'
      />
    )
  }
}

export default Table_Bill_Of_Customer;
