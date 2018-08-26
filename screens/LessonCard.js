import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LessonCard = ({ lessonTitle, navigation }) => {

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.push('LessonOverview')}>
      <Text style={styles.title}>{lessonTitle}</Text>
    </TouchableOpacity>
  )
}




const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 150,
    padding: 20,
    marginRight: 10,
    marginLeft: 10,

    backgroundColor: '#74b9ff',

    borderRadius: 5,
    flex: 1,
  },

  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
});



export default LessonCard;
