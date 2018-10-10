import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const AnswerPopup = ({ correct, correctAnswer, goNextQuestion, failQuestion }) => {

  return (
    <View style={styles.container}>
      <View style={correct ? StyleSheet.flatten([styles.card, styles.correct]) : StyleSheet.flatten([styles.card, styles.incorrect])}>
        { correct &&
          <View style={styles.textWrapper}>
            <Text style={styles.correctAnswer}>Good job!</Text>
          </View>
        }

        { !correct &&
          <View style={styles.textWrapper}>
            <Text style={styles.prompt}>Correct answer:</Text>
            <Text style={styles.correctAnswer}>{correctAnswer}</Text>
          </View>
        }

        <TouchableOpacity onPress={correct ? goNextQuestion : failQuestion} style={styles.nextButton}>
          <Text style={styles.buttonText}>Next Question</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    position: 'absolute',

    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 60,
    // backgroundColor: 'yellow',
  },

  card: {
    width: Dimensions.get('window').width * .85,
    height: 200,
    backgroundColor: 'white',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25,

    borderRadius: 5,

    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },

  textWrapper: {
    flex: 1,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  prompt: {
    fontSize: 15,
    color: 'white',
    marginBottom: 10,
  },

  correctAnswer: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  nextButton: {
    width: 180,
    height: 60,
    borderRadius: 5,

    backgroundColor: 'rgba(0, 0, 0, 0.3)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  correct: {
    backgroundColor: '#2ecc71',

  },

  incorrect: {
    backgroundColor: '#ee5253',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});



export default AnswerPopup;
