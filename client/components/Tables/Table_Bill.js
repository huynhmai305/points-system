import React, { Component } from 'react'
import { Table} from 'reactstrap';
import dateFormat from 'dateformat';
import NumberFormat from 'react-number-format';
import { TablePagination } from 'react-pagination-table'

class DataTable extends Component {
  render() {
    const Header = ["#", "Tổng tiền", "Mã khách hàng","Tên khách hàng", "Ngày tạo"];
    let { items } = this.props;
    items = items.map(item => {
      return {
        ...item,
        createdAt: dateFormat(item.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT"),
        total: <NumberFormat value={item.total} displayType={'text'} thousandSeparator={true} suffix={'đ'} />,
        name_user: item.User.username
      }
    })
    return (
      <TablePagination
        className="table-responsive table-hover thead-light"
        headers={Header}
        data={items}
        columns="id.total.id_user.name_user.createdAt"
        perPageItemCount={5}
        totalCount={50}
      />
    )
  }
}

export default DataTable