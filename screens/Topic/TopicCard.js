import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const TopicCard = ({ navigation, title, color }) => {

  return (
    <TouchableOpacity style={StyleSheet.flatten([styles.container, { backgroundColor: color }])}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}




const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').width * 0.4,
    width: Dimensions.get('window').width * 0.4,

    borderRadius: 5,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});



export default TopicCard;
