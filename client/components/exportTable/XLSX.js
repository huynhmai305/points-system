import React, { Component } from 'react';
import {Button} from 'reactstrap'
import {
    ExcelExport,
    ExcelExportColumn
} from '@progress/kendo-react-excel-export'
import { FaFileExcel } from "react-icons/fa";

class XLSX extends Component {
    _exporter;
    export = () => {
        this._exporter.save();
    }
    render() {
        const {data} = this.props
        console.log(data)
        return (
            <div>
                <Button color="info" className="float-left mr-2" onClick={this.export}>
                <FaFileExcel/> Tải file Excel
                </Button>
                {console.log(data)}
                <ExcelExport
                    data={data}
                    fileName={this.props.name}
                    ref={(exporter) => { this._exporter = exporter; }}
                >
                    {this.props.header.map((item, key) => (
                        <ExcelExportColumn key={key} field={item} title={item.toUpperCase()} width={200} />
                    ))}
                </ExcelExport>
            </div>
        );
    }
}

export default XLSX;
