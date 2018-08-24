import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LessonCard = ({ lessonTitle }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{lessonTitle}</Text>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 150,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,


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
