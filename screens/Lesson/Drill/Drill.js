import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import lessonText from '../../../util/lessonText.json';


const Drill = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.topWrapper}>
        <Feather name='x' onPress={() => navigation.goBack()} style={styles.closeButton} />
      </View>
      <Text>This is a drill</Text>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'white',
  },


  closeButton: {
    color: 'black',
    marginBottom: 15,
    marginTop: 20,
    fontSize: 30,
  },

  topWrapper: {
    height: 60,
    paddingLeft: 30,
    paddingRight: 30,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },


});



export default Drill;
