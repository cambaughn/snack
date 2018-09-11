import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

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

  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
