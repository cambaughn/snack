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
            <LessonCard lessonTitle={"Hola"} navigation={this.props.navigation} />
            <LessonCard lessonTitle={"Dinner Time"} navigation={this.props.navigation} />
            <LessonCard lessonTitle={"Family"} navigation={this.props.navigation} />
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
