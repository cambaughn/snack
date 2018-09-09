import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const LessonCard = ({ lessonTitle, navigation, backgroundColor }) => {

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.container, { backgroundColor }])}
      onPress={() => navigation.navigate('LessonOverview', { lessonTitle, backgroundColor })}
      >
      <Text style={styles.title}>{lessonTitle}</Text>
    </TouchableOpacity>
  )
}




const styles = StyleSheet.create({
  container: {
    height: 165,
    width: Dimensions.get('window').width * 0.31,
    padding: 10,
    marginBottom: 10,

    borderRadius: 5,
  },

  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
});



export default LessonCard;
