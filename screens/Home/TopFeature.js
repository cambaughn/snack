import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const TopFeature = ({ navigation }) => {

  return (
    <View style={styles.container} >
      <Text style={styles.title}>Welcome to Snack!</Text>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TextLesson', { lessonTitle: 'About', backgroundColor: '#ff7675' })}>
          <Text style={styles.buttonText}>Learn more</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    height: 250,
    width: Dimensions.get('window').width,

    backgroundColor: '#ff7675',
    paddingTop: 60,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,

    display: 'flex',
    justifyContent: 'space-around',
  },

  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },

  buttonWrapper: {
    display: 'flex',
    alignItems: 'flex-start'
  },

  button: {
    backgroundColor: 'white',
    borderRadius: 100,

    width: 180,
    height: 50,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#ff7675',
    fontWeight: 'bold',
    fontSize: 18,
  },
});



export default TopFeature;
