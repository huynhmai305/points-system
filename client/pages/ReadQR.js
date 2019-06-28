import React, {Component } from 'react';
import "../static/javascripts/instascan.min.js"

export default class ReadQR extends Component{
  scan = () => {
    var qr = new Instascan.Scanner({
      video: document.getElementById("qrcam")
    });
    qr.addListener('scan', data =>{
      document.getElementById('mahoadon').value=data;
    });
    Instascan.Camera.getCameras()
    .then((cams)=>{
      qr.start(cams[0]);
    })
    .catch(err => console.log(err))
  }
  render(){
    return(
      <div>
        <video id="qrcam"></video>
        <br/>
        <input type="text" id="mahoadon"/>
        {this.scan}
      </div>
    )
  }
} 