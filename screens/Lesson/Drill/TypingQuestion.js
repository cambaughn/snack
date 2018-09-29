import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';

export default class TypingQuestion extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }
  }

  evaluateAnswer = () => {
    let userAnswer = this.state.text.replace(/[^a-z0-9]/gmi, " ").replace(/\s{2,}/g," ");
    console.log('ANSWER = ', userAnswer)
    if (this.props.question.answers.includes(userAnswer)) {
      this.props.goNextQuestion();
    }
  }


  render() {
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
            style={styles.submitButton}
            onPress={this.evaluateAnswer}
            >
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      )
  }
}

// NOTE: Submit button will need to clear keyboard.


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,

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

  submitText: {
    fontSize: 17,
    color: 'white',
  },

  answer: {
    fontSize: 17,
  },
});
