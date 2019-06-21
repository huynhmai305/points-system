import React, {Component} from 'react';
var QRCode = require('qrcode');

class QR extends Component{
    show(){
        if (typeof window !== 'undefined'){
            var canvas = document.getElementById('canvas')
            QRCode.toCanvas(canvas, 'hello world', function (error) {
            if (error) console.error(error)
            console.log('success!');
            })
        }       
    }
    render(){
        return(
            <div>
            <canvas id="canvas"></canvas>
            {this.show()}
            </div>
        )
    }
}
export default QR;