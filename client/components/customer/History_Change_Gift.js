import React, { Component } from 'react'
import dateFormat from 'dateformat';
import {TablePagination} from 'react-pagination-table'

class DataTable extends Component {

  render() {
    const Header = ["Tên quà", "Nội dung","Điểm đổi","Mã cửa hàng", "Ngày đổi quà"];
    let {items} = this.props;
    items = items.map(item=>{
      return {
        ...item,
        createdAt: dateFormat(item.createdAt, "isoDate"),
        title: item.Gift.title,
        content: item.Gift.content,
        point: item.Gift.point,
        id_store: item.Gift.id_store
      }
    })

    return (
      <TablePagination
        className="table-responsive table-hover "
        headers={ Header }
        data={ items }
        columns="title.content.point.id_store.createdAt"
        perPageItemCount={3}
        totalCount={50}
      />
    )
  }
}

export default DataTable
