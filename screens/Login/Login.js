import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';



const Login = ({ signIn }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={signIn} style={styles.googleButton}>
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

    backgroundColor: 'white',

    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  googleButton: {
    width: Dimensions.get('window').width / 2,
    height: 60,
    backgroundColor: 'white',

    borderWidth: 1,
    borderColor: '#636e72',
    borderRadius: 3,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  googleText: {
    color: '#636e72',
  },
});


export default Login;
