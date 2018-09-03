import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Dimensions } from 'react-native';

import lessonText from '../../util/lessonText.json';


const LessonOverview = ({ navigation }) => {
  let lessonTitle = navigation.getParam('lessonTitle');
  let backgroundColor = navigation.getParam('backgroundColor');


  return (
    <View style={StyleSheet.flatten([styles.container, { backgroundColor }])}>
      <StatusBar hidden />
      <ScrollView style={styles.scroll}>
        <View style={styles.closeButtonWrapper}>
          <Text onPress={() => navigation.goBack()} style={styles.closeButton}>X</Text>
        </View>
        <Text style={styles.title}>{lessonTitle}</Text>
        <Text style={styles.body}>{lessonText[lessonTitle.toLowerCase()]}</Text>
      </ScrollView>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    paddingLeft: 30,
  },

  scroll: {
    // paddingTop: 30,
    // paddingBottom: 30,
    // height: Dimensions.get('window').height - 30,
  },

  closeButtonWrapper: {
    // backgroundColor: 'yellow',
    display: 'flex',
    alignItems: 'flex-end',
    paddingRight: 30,
  },

  closeButton: {
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 20,
    marginTop: 30,
    fontSize: 25,
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
    marginBottom: 30,
    lineHeight: 30,
  },
});



export default LessonOverview;
