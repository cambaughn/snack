import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const FinishedDrill = ({ closeModal }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nice Work!</Text>

      <TouchableOpacity
        style={styles.closeButton}
        onPress={closeModal}
        >
          <Text style={styles.closeText}>Finish</Text>
        </TouchableOpacity>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 25,
    fontWeight: 'bold',

    // marginTop: 50,
    marginBottom: 50,
  },

  closeButton: {
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

  closeText: {
    fontSize: 17,
    color: 'white',
  },
});



export default FinishedDrill;
