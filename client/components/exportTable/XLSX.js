import React, { Component } from 'react';
import {Button} from 'reactstrap'
import {
    ExcelExport,
    ExcelExportColumn
} from '@progress/kendo-react-excel-export'

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
                <i class="fas fa-file-excel" aria-hidden="true"> Tải file Excel</i>
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
