import React, { Component } from 'react';
import InfoStore from '../../components/store/Profile'

class Profile extends Component {
  render() {
    return (
      <div>
        <InfoStore />
      </div>
    );
  }
}

export default Profile;
