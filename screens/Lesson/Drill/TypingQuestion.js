import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native';

import AnswerPopup from './AnswerPopup';

export default class TypingQuestion extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      submitted: null,
      correct: null,
    }

    this.baseState = this.state;
  }

  componentWillReceiveProps = () => {
    this.setState(this.baseState);
    Keyboard.dismiss();
  }

  evaluateAnswer = () => {
    let userAnswer = this.state.text.replace(/[^a-z0-9]/gmi, " ").replace(/\s{2,}/g," ");

    if (this.state.text.length > 0) {
      this.setState({ submitted: true });
      Keyboard.dismiss();

      if (this.props.question.answers.includes(userAnswer)) {
        this.setState({ correct: true });
        console.log('RIGHT');
      } else {
        this.setState({ correct: false });
        console.log('WRONG');
      }
    }
  }


  render() {
    let correctAnswer = this.props.question.answers[0];

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.prompt}>{this.props.question.prompt}</Text>
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
            onPress={this.evaluateAnswer}
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
            <AnswerPopup correct={this.state.correct} goNextQuestion={this.props.goNextQuestion} failQuestion={this.props.failQuestion} correctAnswer={correctAnswer} />
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
