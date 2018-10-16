import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import packData from '../../util/dummyData/packData';

const PackCard = ({ navigation, details, backgroundColor }) => {
  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.container, { backgroundColor }])}
      onPress={() => navigation.navigate('LessonList', { lessons: packData[`packList${details.id}`], packTitle: details.title, description: details.description })}
      >
      <Text style={styles.title}>{details.title}</Text>
    </TouchableOpacity>
  )
}




const styles = StyleSheet.create({
  container: {
    height: 200,
    width: Dimensions.get('window').width * 0.37,
    padding: 10,
    marginBottom: 10,
    marginRight: 10,

    borderRadius: 5,

    backgroundColor: '#74b9ff',

    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.3,
  },

  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',

    marginTop: 20,
  },
});



export default PackCard;
