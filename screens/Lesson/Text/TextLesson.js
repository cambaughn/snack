import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import lessonText from '../../../util/lessonText.json';


const TextLesson = ({ navigation }) => {
  let lessonTitle = navigation.getParam('lessonTitle');
  let backgroundColor = navigation.getParam('backgroundColor');

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={StyleSheet.flatten([styles.colorBlock, { backgroundColor: 'white' }])}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{lessonTitle}</Text>
          </View>
          <Feather name='x' onPress={() => navigation.goBack()} style={styles.closeButton} />
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
    color: 'black',
    marginBottom: 15,
    marginTop: 20,
    fontSize: 30,
  },

  colorBlock: {
    height: 130,
    paddingLeft: 30,
    paddingRight: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },

  titleWrapper: {
    height: 130,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
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



export default TextLesson;
