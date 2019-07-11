import React, { Component } from 'react';
import { Table} from 'reactstrap';
import dateFormat from 'dateformat';

class Table_Bill_Of_Customer extends Component {
    render() {
        const items = this.props.items.map(item => {
            return (
              <tr key={item.id}>
                <td scope="row">{item.id}</td>
                <td>{item.total}</td>
                <td>{item.total/1000}</td>
                <td>{dateFormat(item.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
              </tr>
              )
            })
      
          return (
            <Table responsive hover bordered>
              <thead color="primary">
                <tr>
                  <th>Mã hóa đơn</th>
                  <th>Tổng hóa đơn</th>
                  <th>Điểm được tích lũy</th>
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

export default Table_Bill_Of_Customer;