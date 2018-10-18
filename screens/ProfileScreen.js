import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

import db from '../firebase/firebaseConfig.js';


export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      name: null,
      languages: null,
    }

    db.collection("users").where("name", "==", 'Cameron')
    .get()
    .then(snapshot => {
      this.setState({ name: snapshot.docs[0].data().name })
      this.setState({ languages: snapshot.docs[0].data().languages })
      // snapshot.docs.forEach(doc => {
      //   console.log('HERE WE GO => ', doc.data());
      // })
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textWrapper}>
          <Text>{this.state.name}</Text>
          <Text>{this.state.languages}</Text>
          <Text style={styles.text}>Coming Soon!</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  textWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    height: Dimensions.get('window').height,
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
