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
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>{this.props.navigation.getParam('description')}</Text>
        </View>
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

  descriptionWrapper: {
    paddingTop: 20,
    paddingBottom: 20,
  },

  description: {
    color: 'grey',
    textAlign: 'center',
    lineHeight: 25,
  },

});
