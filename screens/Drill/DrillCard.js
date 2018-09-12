import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const DrillCard = ({ navigation }) => {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Drill')}
      >
      <Text style={styles.title}>Drill</Text>
    </TouchableOpacity>
  )
}




const styles = StyleSheet.create({
  container: {
    height: 165,
    width: Dimensions.get('window').width * 0.31,
    padding: 10,
    marginBottom: 10,

    borderRadius: 5,

    backgroundColor: 'white',
  },

  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
});



export default DrillCard;
