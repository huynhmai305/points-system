import React, { Component } from 'react';
import dateFormat from 'dateformat';
import NumberFormat from 'react-number-format';
import { TablePagination } from 'react-pagination-table'

class Table_Bill_Of_Customer extends Component {
  constructor(props) {
    super(props);
    this.state= {
      point_change:''
    }
  }
  
  render() {
    const Header = ["Mã hóa đơn", "Tổng hóa đơn", "Điểm được tích lũy", "Ngày tạo"];
    let { items } = this.props;
    items = items.map(item => {
      return {
        ...item,
        createdAt: dateFormat(item.createdAt, "isoDate"),
        total: <NumberFormat value={item.total} displayType={'text'} thousandSeparator={true} suffix={'đ'} />,
        point: item.total / 1000
      }
    })

    return (
      <TablePagination
        className="table-responsive table-hover thead-light"
        headers={Header}
        data={items}
        columns="id.total.point.createdAt"
        perPageItemCount={3}
        totalCount={15}
      />
    )
  }
}

export default Table_Bill_Of_Customer;