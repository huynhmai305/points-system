import React, { Component } from 'react';
import Home from '../../components/post/Review/ManagerReview';
import Admin from '../../components/admin/Admin';

class Review extends Component {
  render() {
    return (
      <div>
        <Admin title="Quản lý bài review">
          <Home />
        </Admin>
      </div>
    );
  }
}

export default Review;
