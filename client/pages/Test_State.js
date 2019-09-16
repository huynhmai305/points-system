import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="title">Tiêu đề (*)</Label>
                    <Input type="title" name="title" id="title" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplestar">Đánh giá (*)</Label>
                    <Input type="star" name="star" id="examplestar" placeholder="star placeholder" />
                </FormGroup>
                
                <Button>Submit</Button>
            </Form>
        );
    }
}