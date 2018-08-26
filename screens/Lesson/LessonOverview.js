import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LessonOverview = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>THIS IS THE LESSON</Text>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {

  },

  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold'
  },
});



export default LessonOverview;
