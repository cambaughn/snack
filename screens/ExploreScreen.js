import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';

import PackCard from './Pack/PackCard';
import PackSlider from './Pack/PackSlider';

export default class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
    headerBackTitle: null,
    headerTruncatedBackTitle: null,
    headerTintColor: '#ff7675',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#2d3436',
    },
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar hidden />

        <Text style={styles.sectionHeader}>Featured Packs</Text>
        <PackSlider>
          <PackCard navigation={this.props.navigation} title={'Get Started'} backgroundColor={'#74b9ff'} />
          <PackCard navigation={this.props.navigation} title={'Travel'} backgroundColor={'#a29bfe'}/>
        </PackSlider>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    paddingTop: 20,
  },

  textWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: Dimensions.get('window').height,
  },


  sectionHeader: {
    fontSize: 18,
    color: 'gray',
    fontWeight: 'bold',

    marginBottom: 15,
    marginLeft: 10,
  }
});
