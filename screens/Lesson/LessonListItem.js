import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const LessonListItem = ({ navigation, lesson, index }) => {

  let typeIcon = lesson.type === 'reading' ? 'book' : 'zap';
  let route = lesson.type === 'reading' ? 'ReadingLesson' : 'Drill';

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(route, { lesson: lesson })}>
      <Text style={styles.title}>{index + 1}. {lesson.title}</Text>
      <Feather name={typeIcon} size={18} />

    </TouchableOpacity>
  )
}




const styles = StyleSheet.create({
  container: {
    height: 60,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 5,
    marginBottom: 5,

    borderBottomWidth: 1,
    borderBottomColor: '#dfe6e9',

  },

  title: {
    fontSize: 18,
  },
});

export default LessonListItem;
