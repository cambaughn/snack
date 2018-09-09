import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

import LessonCard from './LessonCard';
import LessonSlider from './Lesson/LessonSlider';
import LessonGroup from './Lesson/LessonGroup';
import TopFeature from './Home/TopFeature';
import InfoCard from './Home/InfoCard';



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <ScrollView style={styles.container}>
          <TopFeature navigation={this.props.navigation} />

          <InfoCard navigation={this.props.navigation} />
            <Text style={styles.sectionHeader}>Get Started</Text>
            <LessonGroup>
              <LessonCard lessonTitle={"Hola"} navigation={this.props.navigation} backgroundColor={'#74b9ff'} />
              <LessonCard lessonTitle={"You and Me"} navigation={this.props.navigation} backgroundColor={'#00cec9'} />
              <LessonCard lessonTitle={"Verbs"} navigation={this.props.navigation} backgroundColor={'#a29bfe'} />
              <LessonCard lessonTitle={"Future"} navigation={this.props.navigation} backgroundColor={'#fab1a0'} />
            </LessonGroup>

          <Text style={styles.sectionHeader}>Food</Text>
          <LessonGroup>
            <LessonCard lessonTitle={"Let's Eat!"} navigation={this.props.navigation} backgroundColor={'#fd79a8'} />
            <LessonCard lessonTitle={"Lunch & Such"} navigation={this.props.navigation} backgroundColor={'#fdcb6e'} />
            <LessonCard lessonTitle={"Cooking"} navigation={this.props.navigation} backgroundColor={'#d63031'} />
          </LessonGroup>
        </ScrollView>
      </View>
    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  sliderGroup: {
    marginTop: 10,
  },

  sectionHeader: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',

    marginBottom: 15,
    marginLeft: 10,
  }
});
