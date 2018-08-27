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



export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    console.log("NAVIGATION => ", this.props.navigation)
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Text>Get Started</Text>
          <LessonSlider>
            <LessonCard lessonTitle={"Intro"} navigation={this.props.navigation} backgroundColor={'#74b9ff'} />
            <LessonCard lessonTitle={"Dinner Time"} navigation={this.props.navigation} backgroundColor={'#00cec9'} />
            <LessonCard lessonTitle={"Family"} navigation={this.props.navigation} backgroundColor={'#a29bfe'} />
          </LessonSlider>
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
});
