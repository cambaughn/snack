import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


const LessonOverview = ({ navigation }) => {
  let lessonTitle = navigation.getParam('lessonTitle');
  let backgroundColor = navigation.getParam('backgroundColor');

  return (
    <View style={StyleSheet.flatten([styles.container, { backgroundColor }])}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>{lessonTitle}</Text>
        <Text style={styles.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingLeft: 40,
  },

  scroll: {
    paddingTop: 50
  },

  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  body: {
    color: 'white',
    fontSize: 20,
    marginRight: 30,
    lineHeight: 30,
  },
});



export default LessonOverview;
