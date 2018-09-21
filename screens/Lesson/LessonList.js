import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const LessonList = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      { navigation.getParam('lessons').map(lesson => (
        <View key={lesson}>
          <Text>Lesson Title</Text>
        </View>
      )) }
    </ScrollView>
  )
}




const styles = StyleSheet.create({
  container: {

  },
});

export default LessonList;
