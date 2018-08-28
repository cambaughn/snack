import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

import LessonCard from './LessonCard';
import LessonSlider from './LessonSlider';
import TopFeature from './Home/TopFeature';



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <TopFeature />
          <View style={styles.sliderGroup}>
            <Text style={styles.sectionHeader}>Get Started</Text>
            <LessonSlider>
              <LessonCard lessonTitle={"Intro"} navigation={this.props.navigation} backgroundColor={'#74b9ff'} />
              <LessonCard lessonTitle={"Basics"} navigation={this.props.navigation} backgroundColor={'#00cec9'} />
              <LessonCard lessonTitle={"Verbs"} navigation={this.props.navigation} backgroundColor={'#a29bfe'} />
            </LessonSlider>
          </View>

          <View style={styles.sliderGroup}>
            <Text style={styles.sectionHeader}>Food</Text>
            <LessonSlider>
              <LessonCard lessonTitle={"Let's Eat!"} navigation={this.props.navigation} backgroundColor={'#fd79a8'} />
              <LessonCard lessonTitle={"Lunch & Such"} navigation={this.props.navigation} backgroundColor={'#fdcb6e'} />
              <LessonCard lessonTitle={"Cooking"} navigation={this.props.navigation} backgroundColor={'#d63031'} />
            </LessonSlider>
          </View>
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
    marginTop: 20,
  },
  sectionHeader: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',

    marginBottom: 15,
    marginLeft: 10,
  }
});
