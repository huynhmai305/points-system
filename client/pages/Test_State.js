import React, { Component } from 'react';
import XLXS from 'xlsx'

class Test_State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_import: []
    }
  }
  
  handleFile = (e) => {
    var files = e.target.files[0]
    var reader = new FileReader();
    reader.onload = (e) => {
      var data = e.target.result;
      var workbook = XLXS.read(data, {type: 'binary'});
      workbook.SheetNames.forEach((sheetName) => {
        let row = XLXS.utils.sheet_to_json(workbook.Sheets[sheetName],{header: ["username","birthday","address","phone","email","point"]});
        let json = JSON.stringify(row)
        this.setState({data_import: json},() => {
          console.log(this.state.data_import)
        })
      });
    };
    reader.onerror = (e) => {
      console.log('err:'+e.target.error.code)
    };
    reader.readAsBinaryString(files)
  }
  import = data => {
    fetch('http://localhost:3000/admin/import_batch_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
      .then(response => response.json())
      .then(item => {
        Swal.fire(`Thêm dữ liệu vào cơ sở dữ liệu thành công`,"","success")
        // location.reload()
      })
    
  }

  render() {
    return (
      <div>
        <h3>Chon file</h3>
        <input type="file" id="fileUploader" name="fileUploader" accept=".xls,.xlsx" onChange={this.handleFile}/>
        <button onClick={() => this.import(this.state.data_import)}>Import vào CSDL</button>
        <button href="abc.txt" download>Tải file mẫu</button>
      </div>
    );
  }
}

export default Test_State;
