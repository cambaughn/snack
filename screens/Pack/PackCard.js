import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const PackCard = ({ navigation }) => {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('LessonList', { lessons: [1, 2, 3, 4, 5] })}
      >
      <Text style={styles.title}>Get Started</Text>
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
