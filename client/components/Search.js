import React, { Component } from 'react';
import { Container, FormGroup, Form, Input, Label, Button } from 'reactstrap'
import { FaSearch } from "react-icons/fa";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: null
    }
  }
  onChange = (e) => {
    this.setState({ keyword: e.target.value });
    if (this.state.keyword === '') {
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
            <div className="input-group">
              <Input type="text" className=" py-2 border-right-0 border" id="keyword" name="keyword" placeholder="Nhập thông tin tìm kiếm..." onChange={this.onChange} />
              <span className="input-group-append">
                <Button className="btn border-left-0 border" onClick={this.search} color="primary">
                  <FaSearch />
                </Button>
              </span>
            </div>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default Search;
