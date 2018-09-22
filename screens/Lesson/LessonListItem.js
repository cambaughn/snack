import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LessonListItem = ({ navigation, lesson }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('LessonOverview', { lessonTitle: lesson.title, backgroundColor: lesson.backgroundColor })}>
      <Text style={styles.title}>{lesson.title}</Text>
    </TouchableOpacity>
  )
}




const styles = StyleSheet.create({
  container: {
    height: 50,

    paddingLeft: 30,

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',

    marginBottom: 10,

    // borderBottomWidth: 1,
    // borderBottomColor: '#dfe6e9',

  },

  title: {
    fontSize: 18,
  },
});

export default LessonListItem;
