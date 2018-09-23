import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const LessonListItem = ({ navigation, lesson }) => {

  let typeIcon = lesson.type === 'text' ? 'book' : 'zap';
  let route = lesson.type === 'text' ? 'TextLesson' : 'Drill';

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(route, { lessonTitle: lesson.title, backgroundColor: lesson.backgroundColor })}>
      <Text style={styles.title}>{lesson.title}</Text>
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
