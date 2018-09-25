import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const MultipleChoice = ({ question }) => {

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.prompt}>{question.prompt}</Text>
        <Text style={styles.text}>{question.text}</Text>
      </View>

      <View style={styles.answersWrapper}>
        { question.answers.map(answer => (
          <TouchableOpacity
            onPress={() => console.log(answer === question.answers[question.correct] ? 'Correct answer!' : 'Wrong answer...')}
            style={styles.answerButton}
            key={answer}
            >
              <Text style={styles.answer}>{answer}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,

    display: 'flex',
    justifyContent: 'space-between'
  },

  prompt: {
    fontSize: 16,
    // fontStyle: 'italic',
    marginBottom: 20,
    marginTop: 50,
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

  answer: {
    fontSize: 17,
  },
});



export default MultipleChoice;
