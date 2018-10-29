import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

// Components
import Login from './Login';

// Utility Functions
import db from '../../firebase/firebaseInit.js';
import { updateUser } from '../../redux/actionCreators';
import signInWithGoogleAsync from '../../util/GoogleSignIn';
import { addUserToDatabase } from '../../util/loginHelpers';


class LoginContainer extends React.Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  };

  componentDidUpdate = () => {
    // check if user is logged in and loaded into redux, and if so, navigate to app
    // NOTE: need to add user to database during login
    // NOTE: need to add user token to local storage (asyncstorage)
    if (this.props.user.email) {
      this.props.navigation.navigate('Main');
    }
  }

  login = (callback) => {
    // sign in with google first
    signInWithGoogleAsync(user => {
      addUserToDatabase(user, user => {
        callback(user);
      })
    })
    // add user to our database
    // add to redux and let them use the app!
  }

  render() {
    return (
      <Login signIn={() => this.login( user => this.props.updateUser(user)) } />
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
