import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default class TopicWrapper extends React.Component {
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
    paddingLeft: 10
  },
});
