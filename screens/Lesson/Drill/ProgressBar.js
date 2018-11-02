import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ current, total }) => {
  let progressStyle = total ? StyleSheet.flatten([styles.progress, { width: `${(current / total) * 100}%` }]) : styles.progress;

  
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={progressStyle}></View>
      </View>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
  },

  background: {
    backgroundColor: '#dfe6e9',
    width: '100%',
    height: 8,

    borderRadius: 10,
    overflow: 'hidden',

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  progress: {
    backgroundColor: '#74b9ff',
    width: 0,
    height: 8,
    borderRadius: 10,
  },
});



export default ProgressBar;
