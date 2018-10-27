import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import packData from '../../util/dummyData/packData';

const PackCard = ({ navigation, pack, backgroundColor }) => {
  let containerStyle = backgroundColor ? StyleSheet.flatten([styles.container, { backgroundColor }]) : styles.container;

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={() => navigation.navigate('LessonList', { pack })}
      >
      <Text style={styles.title}>{pack.title}</Text>
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

    backgroundColor: 'black',

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
