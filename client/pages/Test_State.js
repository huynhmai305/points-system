import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Editor } from '@tinymce/tinymce-react'

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = { content: '' };
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }

    handleEditorChange(content, editor) {
        this.setState({ content });
    }
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
                <Editor
                    apiKey='2icj3szs411s8nqf8kqljxz7cvd2478keun6zro00pdptu17'
                    initialValue={this.state.content}
                    init={{
                        selector: 'textarea',
                        plugins: ' lists checklist link image media code paste casechange emoticons preview searchreplace',
                        toolbar: 'undo redo | bold italic casechange| alignleft aligncenter alignright alignjustify| checklist numlist bullist insertfile emoticons searchreplace preview code',
                        toolbar_drawer: 'floating',
                        tinycomments_mode: 'embedded',
                        tinycomments_author: 'Author name'
                    }}
                    onEditorChange={this.handleEditorChange}
                />
                <Button>Submit</Button>
                
            </Form>
        );
    }
}