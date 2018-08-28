import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const TopFeature = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>More great stuff coming soon!</Text>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    height: 250,
    width: Dimensions.get('window').width,

    backgroundColor: '#ff7675',
    paddingTop: 60,
    paddingLeft: 20,
  },

  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
});



export default TopFeature;
