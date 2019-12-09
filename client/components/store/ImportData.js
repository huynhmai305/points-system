import React, { Component } from 'react';
import Swal from 'sweetalert2'
import XLXS from 'xlsx'
import Store from '../Store'
import {Card, CardBody, Row, Col, Button, Label, Input, Container} from 'reactstrap'

class ImportData extends Component {
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

  componentDidMount() {
    var store = JSON.parse(localStorage.getItem('user'));
    this.setState({
      name: store[0].username,
      image: store[0].picture
    })
  }

  render() {
    return (
      <Store username={this.state.name} image={this.state.image}>
        <Container>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/store">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active">Nhập dữ liệu khách hàng</li>
          </ol>
          <Card>
            <CardBody>
              <Row>
                <Col md={12} sm={12} xs={12} className="mb-4">
                  <Label for="fileUploader">Chọn file Excel để nhập dữ liệu</Label>
                  <Input type="file" id="fileUploader" name="fileUploader" accept=".xls,.xlsx" onChange={this.handleFile}/>
                </Col>
                <Col md={2} sm={4} xs={6}>
                  <Button color="primary" onClick={() => this.import(this.state.data_import)}>Nhập dữ liệu</Button>
                </Col>
                <Col md={2} sm={4} xs={6}>
                  <a href="/static/Excel-template.xlsx" download>Tải file mẫu</a>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Container>
      </Store>
    );
  }
}

export default ImportData;
