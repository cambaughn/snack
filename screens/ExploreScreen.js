import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import PackCard from './Pack/PackCard';
import PackSlider from './Pack/PackSlider';
import TopicCard from './Topic/TopicCard';
import Drill from './Lesson/Drill/Drill';
import LessonList from './Lesson/LessonList';

import packData from '../util/dummyData/packData';

import db from '../firebase/firebaseInit.js';

export default class ExploreScreen extends React.Component {
  static navigationOptions = {
    title: 'Explore',
    headerBackTitle: null,
    headerTruncatedBackTitle: null,
    headerTintColor: '#ff7675',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#2d3436',
    },
  };

  constructor(props) {
    super();

    db.collection('packs').get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        // console.log(doc.data());
        doc.data().lessons[0].get().then(snapshot => {
          console.log(snapshot.data())
        })
        // doc.data().lessons.forEach(lesson => {
        //   console.log(lesson);
        // })
      })
    })

    // db.collection('users').add({
    //   name: 'Puppycat',
    //   languages: ['puppy', 'cat']
    // })

    // db.collection('users').get()
    // .then(snapshot => {
    //   snapshot.docs.forEach(doc => {
    //     console.log(doc.data());
    //   })
    // })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />

        <Text style={styles.sectionHeader}>Featured Packs</Text>
        <PackSlider>
          { packData.packs.map(pack => (
            <PackCard navigation={this.props.navigation} details={pack} backgroundColor={pack.backgroundColor} key={pack.id} />
          ))}
        </PackSlider>

        {/* <View style={styles.topicsHeaderWrapper}>
          <Text style={styles.topicsHeader}>Topics</Text>
        </View>
        <View style={styles.topicsWrapper}>
          <TopicCard title={'Beginner'} color={'#0984e3'} />
          <TopicCard title={'Intermediate'} color={'#6c5ce7'} />
          <TopicCard title={'Advanced'} color={'#e17055'} />
          <TopicCard title={'Travel'} color={'#fdcb6e'} />
        </View> */}
      </SafeAreaView>
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

  sectionHeader: {
    fontSize: 18,
    color: 'gray',
    fontWeight: 'bold',

    marginBottom: 15,
    marginLeft: 10,
    marginTop: 20,
  },

  topicsHeaderWrapper: {
    display: 'flex',
    alignItems: 'center',

    marginTop: 50,
    marginBottom: 20,
  },

  topicsHeader: {
    fontSize: 18,
    color: 'gray',
    fontWeight: 'bold',
  },

  topicsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
