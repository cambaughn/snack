import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

// Components
import PackCard from './Pack/PackCard';
import PackSlider from './Pack/PackSlider';
import TopicCard from './Topic/TopicCard';
import Drill from './Lesson/Drill/Drill';
import LessonList from './Lesson/LessonList';

// Utility functions
import { getPacks } from '../util/packHelpers';
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

    this.state = {
      packs: [],
    }

    getPacks(packs => this.setState({ packs }));
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />

        <Text style={styles.sectionHeader}>Featured Packs</Text>
        <PackSlider>
          { this.state.packs.map(pack => (
            <PackCard navigation={this.props.navigation} pack={pack} key={pack.id} />
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
