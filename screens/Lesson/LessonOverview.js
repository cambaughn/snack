import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LessonOverview = ({ navigation }) => {
  let lessonTitle = navigation.getParam('lessonTitle');
  let backgroundColor = navigation.getParam('backgroundColor');

  return (
    <View style={StyleSheet.flatten([styles.container, { backgroundColor }])}>
      <Text style={styles.title}>{lessonTitle}</Text>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 40,
  },

  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
});



export default LessonOverview;
