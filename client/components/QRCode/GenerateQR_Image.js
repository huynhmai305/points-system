import React, { Component } from 'react';
import QRCode from 'qrcode.react'

const GenerateQRImage = (props) => {
    return (
        <div>
            <QRCode
                id="123456"
                value={props.data}
                size={290}
                level={"H"}
                includeMargin={true}
            />
        </div>
    );
}

export default GenerateQRImage;
