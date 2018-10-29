import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { AsyncStorage } from "react-native";

// Utility Functions
import { updateUser } from '../../redux/actionCreators';
import signInWithGoogleAsync from '../../util/GoogleSignIn';
import { retrieveData, getUserbyToken } from '../../util/loginHelpers';


class LoadingScreen extends React.Component {
  static navigationOptions = {
    title: 'Loading',
    header: null
  };

  constructor(props) {
    super(props);
    // AsyncStorage.clear();
  }

  componentDidMount = () => {
    this.determinePath();
  }

  componentDidUpdate = () => {
    this.determinePath();
  }

  determinePath = () => {
    if (this.props.user.email) { // already signed into the app
      this.props.navigation.navigate('Main');
    } else { // not signed into memory - check AsyncStorage
      retrieveData()
      .then(token => {
        getUserbyToken(token, user => {
          this.props.updateUser(user);
        })
      })
      .catch(() => {
        this.props.navigation.navigate('Auth');
      })
    }
  }

  render() {
    return (
      <View></View>
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
)(LoadingScreen);
