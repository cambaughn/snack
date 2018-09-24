import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Dimensions, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';

import lessonText from '../../../util/lessonText.json';


export default class Drill extends React.Component {
  static navigationOptions = {
    gesturesEnabled: false
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.topWrapper}>
          <Feather
            name='x'
            onPress={() => {
              Alert.alert(
                'Do you want to exit?',
                'Your progress in this lesson will be lost.',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => this.props.navigation.goBack()},
                ],
                { cancelable: true }
              )
            }}
            style={styles.closeButton}
          />
        </View>
        <Text>This is a drill</Text>
      </View>
    )
  }
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
