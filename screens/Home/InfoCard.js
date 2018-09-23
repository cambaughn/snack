import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const InfoCard = ({ navigation }) => {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('TextLesson', { lessonTitle: 'Why Spanish?', backgroundColor: '#b2bec3' })}
      >
      <Text style={styles.title}>Why Spanish?</Text>
    </TouchableOpacity>
  )
}




const styles = StyleSheet.create({
  container: {
    height: 80,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20,

    borderRadius: 5,
    flex: 1,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#b2bec3',
  },

  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
});



export default InfoCard;
