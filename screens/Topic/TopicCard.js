import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const TopicCard = ({ navigation }) => {

  return (
    <TouchableOpacity
      style={styles.container}
      // onPress={() => navigation.navigate('', { lessons: [{title: 'Hola', backgroundColor: '#74b9ff', id: 1}, {title: 'You and Me', backgroundColor: '#00cec9', id: 2}] })}
      >
      <Text style={styles.title}>Beginner</Text>
    </TouchableOpacity>
  )
}




const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').width * 0.45,
    width: Dimensions.get('window').width * 0.45,
    padding: 10,
    marginBottom: 10,
    marginRight: 10,

    borderRadius: 5,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#00cec9',
  },

  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',

    marginTop: 20,
  },
});



export default TopicCard;
