import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

// Components
import Login from './Login';

// Utility Functions
import db from '../../firebase/firebaseInit.js';
import { updateUser } from '../../redux/actionCreators';
import signInWithGoogleAsync from '../../util/GoogleSignIn';


class LoginContainer extends React.Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  };

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps = () => {
    // check if user, and if so, navigate to app
    console.log('user has logged in => ', this.props.user);

    // NOTE: need to add user to database during login
    // NOTE: need to add user token to local storage (asyncstorage)
    if (this.props.user.email) {
      this.props.navigation.navigate('Main');
    }
  }

  render() {
    return (
      <Login signIn={() => signInWithGoogleAsync( user => this.props.updateUser(user)) } />
    )
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
)(LoginContainer);
