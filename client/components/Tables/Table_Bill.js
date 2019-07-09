import React, { Component } from 'react'
import { Table} from 'reactstrap';
import dateFormat from 'dateformat';

class DataTable extends Component {
  render() {
    const items = this.props.items.map(item => {
      return (
        <tr key={item.id}>
          <td scope="row">{item.id}</td>
          <td>{item.total}</td>
          <td>{dateFormat(item.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead color="primary">
          <tr>
            <th>#</th>
            <th>Tổng tiền</th>
            <th>Ngày tạo</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default DataTable