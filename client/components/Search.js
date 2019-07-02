import React, { Component } from 'react';
import { Container,FormGroup,Form,Input,Label,Button } from 'reactstrap'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: null
        }
    }
    onChange = (e) => {
        this.setState({ keyword: e.target.value });
        if(this.state.keyword===''){
            location.reload();
        }
    }
    search = () => {
        this.props.handlekeyword(this.state.keyword)
    }

    render() {
        return (
            <Container>
                <Form inline>
                    <FormGroup>
                        <Label for="keyword" />
                        <Input type="text" id="keyword" name="keyword" placeholder="Nhập thông tin tìm kiếm..." onChange={this.onChange} />
                    </FormGroup>
                    <Button onClick={this.search} color="info">Tìm kiếm</Button>
                </Form>
            </Container>
        );
    }
}

export default Search;
