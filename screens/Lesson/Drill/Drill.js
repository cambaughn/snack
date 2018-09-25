import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Dimensions, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

import lessonText from '../../../util/lessonText.json';
import MultipleChoice from './MultipleChoice';

export default class Drill extends React.Component {
  static navigationOptions = {
    gesturesEnabled: false
  };

  render() {
    let currentQuestion = { type: 'multipleChoice', prompt: 'Please translate the following', text: 'Que estas haciendo?', answers: ['Hello, how are you?', 'What are you up to?', 'What are you doing?'], correct: 2}

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.topWrapper}>
          <Feather
            name='x'
            onPress={() => {
              Alert.alert(
                'Do you want to exit?',
                'Your progress in this lesson will be lost.',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => this.props.navigation.goBack()},
                ],
                { cancelable: true }
              )
            }}
            style={styles.closeButton}
          />
        </View>
        { currentQuestion.type === 'multipleChoice' &&
          <MultipleChoice question={currentQuestion} />
        }
      </View>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'white',
  },


  closeButton: {
    color: 'black',
    marginBottom: 15,
    marginTop: 20,
    fontSize: 30,
  },

  topWrapper: {
    height: 60,
    paddingLeft: 30,
    paddingRight: 30,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },


});
