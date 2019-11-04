import React, { Component } from 'react';
import QRCode from 'qrcode.react'

class GenerateQRImage extends Component {
    render() {
        return (
            <div>
                <QRCode
                    id="123456"
                    value={this.props.data}
                    size={290}
                    level={"H"}
                    includeMargin={true}
                />
            </div>
        );
    }
}

export default GenerateQRImage;
