import React, { Component } from 'react'
import { Button, Tooltip } from 'reactstrap';
import dateFormat from 'dateformat';
import Link from 'next/link';
import {TablePagination} from 'react-pagination-table'

class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state={
            tooltipOpen: false
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
    actions = (item)=>{
      return (
        <div style={{width:'auto'}}>
          <Link href={"/store/billofcustomer?id_user="+item.id}>
            <Button color="success" id="bill"><i className="fas fa-money-bill-alt"></i></Button>
          </Link>
          <Tooltip placement="top" isOpen={this.state.tooltipOpen} autohide={false} target="bill" toggle={this.toggle}>
            Thêm hóa đơn tích điểm
          </Tooltip>
        </div>
      )
    }

  render() {
    const Header = ["#","Họ tên", "Ngày sinh", "Địa chỉ", "Điện thoại", "Email","Điểm", "Ngày đăng ký" ," "];
    let {items} = this.props;
    let totalCount = items.length;
    items = items.map(item=>{
      return {
        ...item,
        createdAt: dateFormat(item.createdAt, "isoDate"),
        actions : this.actions(item)
      }
    })

    return (
      <TablePagination
        className="table-responsive table-hover"
        headers={ Header }
        data={ items }
        columns="id.username.birthday.address.phone.email.point.createdAt.actions"
        perPageItemCount={4}
        totalCount={50}
      />
    )
  }
}

export default DataTable