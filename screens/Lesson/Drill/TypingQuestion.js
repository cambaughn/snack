import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native';

import AnswerPopup from './AnswerPopup';

// Helper Functions
import { streamline, evaluateTypingQuestion } from '../../../util/questionEval';


export default class TypingQuestion extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      submitted: null,
      correct: null,
      answerWithAccents: null
    }

    this.baseState = this.state;
  }

  componentWillReceiveProps = () => {
    this.setState(this.baseState);
    Keyboard.dismiss();
  }

  setSubmitted = () => {
    this.setState({ submitted: true });
  }

  setAnswerAs = (value) => {
    this.setState({ correct: value });
  }

  setAnswerWithAccents = (value) => {
    this.setState({ answerWithAccents: value });
  }


  render() {
    let correctAnswer = this.props.question.correctAnswers[0];

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.prompt}>Translate the following</Text>
          <Text style={styles.text}>{this.props.question.text}</Text>

          <TextInput
            style={styles.textBox}
            numberOfLines={4}
            multiline={true}
            autoFocus={true}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </View>

        <KeyboardAvoidingView style={styles.answersWrapper} contentContainerStyle={styles.answersWrapper} >
          <TouchableOpacity
            style={this.state.text.length > 0 ? styles.submitButton : StyleSheet.flatten([styles.submitButton, styles.selectButton])}
            onPress={() => evaluateTypingQuestion(this.state.text, this.props.question.correctAnswers, this.setSubmitted, this.setAnswerAs, this.setAnswerWithAccents)}
            >
              { !this.state.text.length > 0 &&
                <Text style={styles.submitText}>Type Answer</Text>
              }
              { this.state.text.length > 0 &&
                <Text style={styles.submitText}>Submit</Text>
              }
            </TouchableOpacity>
          </KeyboardAvoidingView>

          { this.state.submitted &&
            <AnswerPopup correct={this.state.correct} goNextQuestion={this.props.goNextQuestion} failQuestion={this.props.failQuestion} correctAnswer={correctAnswer} answerWithAccents={this.state.answerWithAccents} />
          }
        </View>
      )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,

    display: 'flex',
    justifyContent: 'flex-start'
  },

  prompt: {
    fontSize: 16,
    // fontStyle: 'italic',
    marginBottom: 20,
    marginTop: 40,
  },

  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  answersWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 20,
  },

  textBox: {
    borderRadius: 5,
    borderColor: '#2d3436',
    borderWidth: 1,

    height: 120,
    padding: 10,

    fontSize: 17,
  },

  submitButton: {
    width: Dimensions.get('window').width * .75,
    height: 70,
    marginBottom: 15,
    marginTop: 25,
    borderRadius: 5,

    backgroundColor: 'black',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectButton: {
    backgroundColor: 'grey',
  },

  submitText: {
    fontSize: 17,
    color: 'white',
  },

  answer: {
    fontSize: 17,
  },
});
