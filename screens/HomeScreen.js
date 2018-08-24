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
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <LessonSlider>
            <LessonCard lessonTitle={"Hola"} />
            <LessonCard lessonTitle={"Dinner Time"} />
            <LessonCard lessonTitle={"Family"} />
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
