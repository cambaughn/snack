import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Dimensions, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';

import lessonText from '../../../util/lessonText.json';
import MultipleChoice from './MultipleChoice';
import TypingQuestion from './TypingQuestion';
import FinishedDrill from './FinishedDrill';

export default class Drill extends React.Component {
  static navigationOptions = {
    gesturesEnabled: false,
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      questions: this.props.navigation.getParam('questions'),
      pointer: 0,
    }
  }

  goNextQuestion = () => {
    this.setState({ pointer: this.state.pointer + 1 })
  }

  closeModal = () => {
    this.props.navigation.goBack();
  }


  render() {
    let currentQuestion = this.state.questions[this.state.pointer] || 'finished';

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <View style={styles.topWrapper}>
          { currentQuestion !== 'finished' &&
          <Feather
            name='x'
            onPress={() => {
              Alert.alert(
                'Do you want to exit?',
                'Your progress in this lesson will be lost.',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: this.closeModal},
                ],
                { cancelable: true }
              )
            }}
            style={styles.closeButton}
          />
          }
        </View>
        { currentQuestion.type === 'multipleChoice' &&
          <MultipleChoice question={currentQuestion} goNextQuestion={this.goNextQuestion} />
        }

        { currentQuestion.type === 'typing' &&
          <TypingQuestion question={currentQuestion} goNextQuestion={this.goNextQuestion} />
        }

        { currentQuestion === 'finished' &&
          <FinishedDrill closeModal={this.closeModal} />
        }
      </SafeAreaView>
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
