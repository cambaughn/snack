import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import DrillCard from '../Drill/DrillCard';
import lessonText from '../../util/lessonText.json';


const LessonOverview = ({ navigation }) => {
  let lessonTitle = navigation.getParam('lessonTitle');
  let backgroundColor = navigation.getParam('backgroundColor');

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={StyleSheet.flatten([styles.colorBlock, { backgroundColor }])}>
          <View style={styles.closeButtonWrapper}>
            <Feather name='x' onPress={() => navigation.goBack()} style={styles.closeButton} />
          </View>
          <Text style={styles.title}>{lessonTitle}</Text>
        </View>
        <Text style={styles.body}>{lessonText[lessonTitle.toLowerCase().replace(/[^a-zA-Z]+/g, '')]}</Text>

      </ScrollView>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'white',
  },

  scroll: {

  },

  closeButtonWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingRight: 30,
  },

  closeButton: {
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: 15,
    marginTop: 20,
    fontSize: 30,
  },

  colorBlock: {
    height: 130,
    paddingLeft: 30,
  },

  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },

  body: {
    color: '#2d3436',
    fontSize: 18,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 30,
    lineHeight: 30,
  },
});



export default LessonOverview;
