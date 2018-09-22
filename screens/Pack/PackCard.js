import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const PackCard = ({ navigation, title, backgroundColor }) => {

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.container, { backgroundColor }])}
      onPress={() => navigation.navigate('LessonList', { lessons: [{title: 'Hola', backgroundColor: '#74b9ff', id: 1}, {title: 'You and Me', backgroundColor: '#00cec9', id: 2}] })}
      >
      <Text style={styles.title}>{title}</Text>
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
  },

  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',

    marginTop: 20,
  },
});



export default PackCard;
