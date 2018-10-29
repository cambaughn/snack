import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

// Components
import UserProfile from './Profile/UserProfile';

// Utility Functions
import db from '../firebase/firebaseInit.js';
import { updateUser } from '../redux/actionCreators';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    header: null
  };

  render() {
    return (
      <UserProfile user={this.props.user} />
    );
  }
}




const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => dispatch(updateUser(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
