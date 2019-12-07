import React, { Component } from 'react';
import { Card, CardBody, Form, FormGroup, Label, Container} from 'reactstrap';
import Admin from '../../components/admin/Admin'
import ManagerSetPoint from '../../components/SetPoint/Manager_Set_Point'

export default class Change_point extends Component {
  render() {
    return (
      <Admin title="Giá trị quy đổi điểm">
        <Container>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/admin">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active">Quản lý giá trị quy đổi điểm thưởng</li>
          </ol>
          <Card>
            <CardBody>
              <Form >
                <FormGroup>
                  <Label>Công thức tính điểm tích lũy:</Label>
                  <h5>Điểm tích lũy = Tổng tiền thanh toán * giá trị quy đổi</h5>
                </FormGroup>
            </Form>
            </CardBody>
          </Card>
          <ManagerSetPoint/>
        </Container>
      </Admin>
    )
  }
}
