import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Helper Functions
import { completeLesson } from '../../../util/lessonHelpers';
import { getUser } from '../../../util/userHelpers';


export default class FinishedDrill extends React.Component {

  componentDidMount() {
    completeLesson(this.props.lessonId, this.props.user.id, this.props.user.coins, 10, this.props.user.completed_lessons);
    getUser(this.props.user.id, this.props.updateUser)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Nice Work!</Text>

        <View style={styles.coinWrapper}>
          <Text style={styles.bigNumber}>+10</Text>
          <Feather name={'stop-circle'} style={styles.icon} />
        </View>

        <Text style={styles.subhead}>Here are some more coins</Text>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={this.props.closeModal}
          >
            <Text style={styles.closeText}>Finish</Text>
          </TouchableOpacity>
        </View>
      )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  subhead: {
    fontSize: 20,
  },

  coinWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    marginBottom: 20,
  },

  icon: {
    fontSize: 40,
    color: '#ff7675',
  },

  bigNumber: {
    fontSize: 35,
    marginRight: 10,
  },

  closeButton: {
      width: Dimensions.get('window').width * .75,
      height: 70,
      marginBottom: 15,
      marginTop: 25,
      borderRadius: 5,

      backgroundColor: 'black',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

  closeText: {
    fontSize: 17,
    color: 'white',
  },
});
