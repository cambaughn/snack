import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import signInWithGoogleAsync from '../util/GoogleSignIn';

export default class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Coming Soon!</Text>
          <TouchableOpacity onPress={signInWithGoogleAsync} style={styles.googleButton}>
            <Text>Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  textWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: Dimensions.get('window').height,
  },

  googleButton: {
    width: Dimensions.get('window').width / 2,
    height: 30,
    backgroundColor: 'blue',
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
