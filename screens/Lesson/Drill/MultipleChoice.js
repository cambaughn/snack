import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import AnswerPopup from './AnswerPopup';

export default class MultipleChoice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
      submitted: null,
      correct: null,
      correctAnswer: this.props.question.answers[this.props.question.correct],
    }

    // this.baseState = this.state;
  }

  componentWillReceiveProps = () => {
    let baseState = {
      selected: null,
      submitted: null,
      correct: null,
      correctAnswer: this.props.question.answers[this.props.question.correct],
    };

    this.setState(baseState);
  }

  evaluateAnswer = () => {
    if (this.state.selected) {
      this.setState({ submitted: true });
      if (this.state.selected === this.state.correctAnswer) { // if answered correctly
        this.setState({ correct: true });
        console.log('correct answer!!!!');
      } else { // if answered incorrectly
        // this.props.failQuestion();
        this.setState({ correct: false });
        console.log('wrong answer!!!!')
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.prompt}>{this.props.question.prompt}</Text>
          <Text style={styles.text}>{this.props.question.text}</Text>
        </View>

        <View style={styles.answersWrapper}>
          { this.props.question.answers.map(answer => {
              let answerStyle = this.state.selected === answer ? StyleSheet.flatten([styles.answerButton, styles.selectedAnswer]) : styles.answerButton;
              let answerText = this.state.selected === answer ? StyleSheet.flatten([styles.answer, styles.selectedAnswerText]) : styles.answer;
              return (
              <TouchableOpacity
                onPress={() => this.setState({ selected: answer })}
                style={answerStyle}
                key={answer}
                >
                  <Text style={answerText}>{answer}</Text>
                </TouchableOpacity>
              )
          })}
            <TouchableOpacity
              style={this.state.selected ? styles.submitButton : StyleSheet.flatten([styles.submitButton, styles.selectButton])}
              onPress={this.evaluateAnswer}
              >
                { !this.state.selected &&
                  <Text style={styles.submitText}>Please Select</Text>
                }
                { this.state.selected &&
                  <Text style={styles.submitText}>Submit</Text>
                }
              </TouchableOpacity>
            </View>

            { this.state.submitted &&
              <AnswerPopup correct={this.state.correct} goNextQuestion={this.props.goNextQuestion} failQuestion={this.props.failQuestion} correctAnswer={this.props.question.answers[this.props.question.correct]} />
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
    justifyContent: 'flex-start',
    backgroundColor: 'white'
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
    marginBottom: 15,
  },

  answersWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 20,
    marginTop: 25,
  },

  answerButton: {
    width: Dimensions.get('window').width * .75,
    height: 70,
    marginBottom: 15,
    borderRadius: 5,

    borderColor: 'black',
    borderWidth: 1,

    backgroundColor: 'white',
    // shadowColor: 'grey',
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 3,
    // shadowOpacity: 0.3,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedAnswer: {
    backgroundColor: '#74b9ff',
    borderColor: '#74b9ff',
  },

  selectedAnswerText: {
    color: 'white',
    fontWeight: 'bold',
  },

  submitButton: {
    width: Dimensions.get('window').width * .75,
    height: 70,
    marginBottom: 15,
    borderRadius: 5,

    // borderColor: 'black',
    // borderWidth: 1,

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
