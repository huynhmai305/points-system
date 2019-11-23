import React, { Component} from 'react';
import Review from './Review'
import {useRouter} from 'next/router'
import {Row, Col} from 'reactstrap'
import ModalForm from './ModalReview';

class ReviewList extends Component {
  state = {
    items: []
  }
  getItemsByPost() {
    let url = 'http://localhost:3000/users/review/'+this.props.postId;
    fetch(url)
      .then(response => response.json())
      .then(items => this.setState({ items }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
      this.getItemsByPost()
  }
  render() {
    const {items} = this.state
    const info = JSON.parse(localStorage.getItem('user'));
    return (
      <div>
        {info !== null ? (
          <Row className="mb-5">
            <Col md={{ offset: 10, size: 3 }}>
              <ModalForm buttonLabel='Add' postId={this.props.postId}/>
            </Col>
          </Row>
        ) : ''}
        <h4 className="title">
          <span>Review</span>
        </h4>
        {items.map((dt, key) => (
          <Review key={key}
            title={dt.title}
            content={dt.content}
            rating={dt.rating}
            image={dt.User.picture}
            username={dt.User.username}
            createdAt={dt.createdAt}
          />
        ))}
      </div>
    );
  }
}
function getPostId() {
  const router = useRouter()
  const postId = parseInt(router.query.id)
  // const items = this.props.items
  return (
    <ReviewList postId={postId}/>
  )
}
export default getPostId;
