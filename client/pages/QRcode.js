import React, {Component} from 'react';
import QRCode from 'qrcode';

class QR extends Component{
    constructor(props) {
        super(props);
    }
    
    show(){
        if (typeof window !== 'undefined'){           
            var canvas = document.getElementById('canvas')
            QRCode.toCanvas(canvas, 'Mai', function (error) {
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