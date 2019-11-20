import React, { Component } from 'react'
import { Button } from 'reactstrap';
import ModalForm from './Modal_Post';
import dateFormat from 'dateformat';
import { TablePagination } from 'react-pagination-table'
import HtmlParser from 'react-html-parser'

class PostTable extends Component {

    deleteItem = id => {
        let confirmDelete = window.confirm('Bạn có chắc muốn xóa không?')
        if (confirmDelete) {
            // console.log(id)
            fetch('http://localhost:3000/users/post', {
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
    actions = (item) => {
        return (
            <div style={{ width: "100px" }}>
                <ModalForm buttonLabel='Edit' item={item} updateState={this.props.updateState} />
                {' '}
                <Button color="danger" onClick={() => this.deleteItem(item.id)}><i className="fas fa-trash-alt"></i></Button>
            </div>
        )
    }
    render() {
        const Header = ["#", "Tiêu đề", "Nội dung", "Cửa hàng", "Ngày đăng ký", " "];
        let { items } = this.props;
        items = items.map(item => {
            return {
                ...item,
                content: HtmlParser(item.content.slice(0,500)+' <a href="#">Xem chi tiết >></a>'),
                createdAt: dateFormat(item.createdAt, "isoDate"),
                actions: this.actions(item)
            }
        })

        return (
            <TablePagination
                className="table-responsive table-hover"
                headers={Header}
                data={items}
                columns="id.title.content.storeId.createdAt.actions"
                perPageItemCount={4}
                totalCount={50}
            />
        )
    }
}

export default PostTable