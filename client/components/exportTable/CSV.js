import React, { Component } from 'react';
import { CSVLink } from 'react-csv';

class CSV extends Component {
    render() {
        return (
            <div>
                <CSVLink
                    filename={"Bill.csv"}
                    color="primary"
                    style={{ float: "left", marginRight: "10px" }}
                    className="btn btn-info"
                    data={this.state.items}
                >
                    <i className="fas fa-file-csv"> Download CSV</i>
                </CSVLink>
            </div>
        );
    }
}

export default CSV;
