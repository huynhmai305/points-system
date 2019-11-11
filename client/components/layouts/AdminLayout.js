import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminControlSidebar from "./AdminControlSidebar";
import AdminContent from "./AdminContent";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'reactstrap';
import 'js-cookie';
import 'react-web-tabs/dist/react-web-tabs.css';

/**
 * Main admin layout - A Higher Order Component
 */
class AdminLayoutHoc extends React.Component {
    render() {
        return <div className="wrapper">
            <AdminHeader/>
            <AdminSidebar/>
            <AdminContent title={this.props.contentTitle} titleButton={this.props.contentTitleButton}>
                {this.props.children}
            </AdminContent>
            <AdminControlSidebar/>
            {/*<AdminFooter rightContent={'Some text for the footer'} leftContent={<div>I must be an element</div>}/>*/}
        </div>
    }
}

AdminLayoutHoc.propTypes = {
    contentTitle: PropTypes.string,
    contentTitleButton: PropTypes.element,
};
export default AdminLayoutHoc
