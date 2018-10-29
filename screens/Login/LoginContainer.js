import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

// Components
import Login from './Login';

// Utility Functions
import db from '../../firebase/firebaseInit.js';
import { updateUser } from '../../redux/actionCreators';
import signInWithGoogleAsync from '../../util/GoogleSignIn';
import { addUserToDatabase, storeData } from '../../util/loginHelpers';


class LoginContainer extends React.Component {
  static navigationOptions = {
    title: 'Login',
    header: null
  };

  componentDidUpdate = () => {
    // check if user is logged in and loaded into redux, and if so, navigate to app
    if (this.props.user.email) {
      this.props.navigation.navigate('Main');
    }
  }

  login = (callback) => {
    signInWithGoogleAsync(user => {
      addUserToDatabase(user, user => {
        callback(user);
        storeData(user);
      })
    })
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
