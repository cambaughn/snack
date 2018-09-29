import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';

const TypingQuestion = ({ question }) => {

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.prompt}>{question.prompt}</Text>
        <Text style={styles.text}>{question.text}</Text>

        <TextInput
          style={styles.textBox}
          numberOfLines={4}
          multiline={true}
          autoFocus={true}
        />
      </View>

      <KeyboardAvoidingView style={styles.answersWrapper} contentContainerStyle={styles.answersWrapper} >
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => console.log('Submitting!')}
            >
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
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



export default TypingQuestion;
