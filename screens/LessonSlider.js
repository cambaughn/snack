import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default class LessonSlider extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        {this.props.children}
      </ScrollView>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    paddingLeft: 0,

  },
});
