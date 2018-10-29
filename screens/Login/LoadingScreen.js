import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

// Utility Functions
import { updateUser } from '../../redux/actionCreators';
import signInWithGoogleAsync from '../../util/GoogleSignIn';


class LoadingScreen extends React.Component {
  static navigationOptions = {
    title: 'Loading',
    header: null
  };

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    // check if user, and if so, navigate to app
    // else, navigate to auth screen

    console.log(!!this.props.user);

    if (this.props.user.email) {
      this.props.navigation.navigate('Main');
    } else {
      this.props.navigation.navigate('Auth');
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
