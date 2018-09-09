import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

export default class Lesson extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingLeft: 5,
    paddingRight: 5,

    marginBottom: 15,
  },
});
