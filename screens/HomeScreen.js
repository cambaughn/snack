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

import LessonCard from './Lesson/LessonCard';
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
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <TopFeature navigation={this.props.navigation} />

          <InfoCard navigation={this.props.navigation} />
            <Text style={styles.sectionHeader}>Get Started</Text>
            <LessonGroup>
              <LessonCard lessonTitle={"Hola"} navigation={this.props.navigation} backgroundColor={'#74b9ff'} />
              <LessonCard lessonTitle={"You and Me"} navigation={this.props.navigation} backgroundColor={'#00cec9'} />
              <LessonCard lessonTitle={"To Be or Not To Be"} navigation={this.props.navigation} backgroundColor={'#a29bfe'} />
            </LessonGroup>

          <Text style={styles.sectionHeader}>More Coming Soon</Text>
          <LessonGroup>
            <LessonCard lessonTitle={"Stay Tuned!"} navigation={this.props.navigation} backgroundColor={'#b2bec3'} />
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
