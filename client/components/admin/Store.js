var React = require('react');
var Admin = require('.');
var dateFormat = require('dateformat');
class Stores extends React.Component {
    render() {
        return (
            <Admin title="Quản lý cửa hàng">
                <div>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/admin">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Quản lý người dùng</a>
                        </li>
                        <li className="breadcrumb-item active">Quản lý cửa hàng</li>
                    </ol>

                    <table className="table table-striped table-responsive table-hover">
                        <thead className="table-primary">
                            <tr >
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Ngày đăng ký</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.result.map((item, key) =>
                                <tr key={key}>
                                    <td scope="row" name="id">{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.address}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>{dateFormat(item.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                                    <td>
                                        <a name="btnDelete" className="btn btn-danger" href={"/admin/user/delete/"+item.id}><i className="fas fa-trash-alt"></i></a>
                                    </td>

                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </Admin>
        );
    }
}


module.exports = Stores;