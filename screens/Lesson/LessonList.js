import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import LessonListItem from './LessonListItem';

export default class LessonList extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white',
      borderBottomWidth: 0,
    },
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        { this.props.navigation.getParam('lessons').map(lesson => (
          <LessonListItem lesson={lesson} navigation={this.props.navigation} key={lesson.id} />
        )) }
      </ScrollView>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
  },
});
