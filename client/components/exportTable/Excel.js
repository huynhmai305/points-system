import React, { Component } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class Test extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props.id_table + this.props.name)
    }

    render() {
        const btnText = <i class="fas fa-file-excel" aria-hidden="true"> Tải file Excel</i>
        return (
            <div>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-info float-left mr-2"
                    table={this.props.id_table}
                    filename={this.props.name}
                    sheet="tablexls"
                    buttonText={btnText}
                />
            </div>
        );
    }
}

export default Test
