import React from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Feather } from '@expo/vector-icons';


export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.top}>
          <View style={styles.imageWrapper}>
            <Image source={{uri: this.props.user.photoUrl}} style={styles.image} />
          </View>
          <Text style={styles.name}>{this.props.user.name}</Text>
        </View>

        <ScrollView style={styles.scroll}>

          <Text style={styles.header}>Stats</Text>
          <View style={styles.statWrapper}>
            <View style={styles.subheadWrapper}>
              <Feather name={'check-circle'} style={styles.icon} />
              <Text style={styles.subhead}>Lessons Completed</Text>
            </View>
            <Text style={styles.dataWrapper}>
              <Text style={styles.big}>{this.props.user.lessons_completed}</Text>
              {/* <Text style={styles.small}>  Lessons</Text> */}
            </Text>
          </View>

          <View style={styles.statWrapper}>
            <View style={styles.subheadWrapper}>
              <Feather name={'stop-circle'} style={styles.icon} />
              <Text style={styles.subhead}>Coin Count</Text>
            </View>
            <Text style={styles.dataWrapper}>
              <Text style={styles.big}>{this.props.user.coins}</Text>
              {/* <Text style={styles.small}>  Lessons</Text> */}
            </Text>
          </View>

        </ScrollView>

      </SafeAreaView>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 60,
  },

  top: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    paddingLeft: 30,
    marginBottom: 30,
  },

  imageWrapper: {
    borderRadius: 100,
    overflow: 'hidden',
    marginRight: 20,
  },

  image: {
    width: 60,
    height: 60,
  },

  name: {
    fontSize: 20,
  },

  scroll: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 30,
  },

  header: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  statWrapper: {
    marginBottom: 20,
  },

  subheadWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  icon: {
    fontSize: 40,
    marginRight: 15,
    color: '#ff7675',
  },

  subhead: {
    fontSize: 18,
  },

  big: {
    fontSize: 75,
    fontWeight: 'bold',
    color: '#b2bec3',

    marginRight: 10,
  },

  small: {
    marginLeft: 30,
  },

  dataWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',

    paddingLeft: 45,
  },

});
