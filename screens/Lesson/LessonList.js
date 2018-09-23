import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import LessonListItem from './LessonListItem';

export default class LessonList extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('packTitle'),
      headerStyle: {
        backgroundColor: 'white',
        borderBottomWidth: 0,
      },
      headerTintColor: '#ff7675',
      headerTitleStyle: {
        color: '#2d3436',
        fontSize: 18,
      },
    };
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

    paddingLeft: 30,
    paddingRight: 30,

  },

  headerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
