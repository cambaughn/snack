import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';

import PackCard from './Pack/PackCard';
import PackSlider from './Pack/PackSlider';

export default class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar hidden />

        <Text style={styles.sectionHeader}>Featured</Text>
        <PackSlider>
          <PackCard navigation={this.props.navigation} />
          <PackCard navigation={this.props.navigation} />
        </PackSlider>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    paddingTop: 50,
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
  },

  sectionHeader: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',

    marginBottom: 15,
    marginLeft: 10,
  }
});
