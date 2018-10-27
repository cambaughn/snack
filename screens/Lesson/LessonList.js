import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

// Components
import LessonListItem from './LessonListItem';

// Utility functions
import { getLessons } from '../../util/lessonHelpers';


export default class LessonList extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('pack').title,
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

  constructor() {
    super();

    this.state = {
      lessons: [],
    }
  }

  componentWillMount = () => {
    getLessons(this.props.navigation.getParam('pack').id, (lessons) => {
      this.setState({ lessons });
    })
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>{this.props.navigation.getParam('pack').description}</Text>
        </View>
        { this.state.lessons.map((lesson, index) => (
          <LessonListItem lesson={lesson} navigation={this.props.navigation} key={lesson.id} index={index} />
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
