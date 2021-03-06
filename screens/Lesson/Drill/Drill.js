import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Dimensions, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';

// Components
import lessonText from '../../../util/lessonText.json';
import MultipleChoice from './MultipleChoice';
import TypingQuestion from './TypingQuestion';
import FinishedDrill from './FinishedDrill';
import ProgressBar from './ProgressBar';

// Utility functions
import { getQuestions, createQuestions } from '../../../util/questionHelpers';
import { updateUser } from '../../../redux/actionCreators';


class Drill extends React.Component {
  static navigationOptions = {
    gesturesEnabled: false,
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      pointer: 0,
    }
  }

  componentWillMount = () => {
    getQuestions(this.props.navigation.getParam('lesson').id, (questions) => {
      createQuestions(questions, (questions) => {
        this.setState({ questions });
      })
    })
  }

  closeModal = () => {
    this.props.navigation.goBack();
  }

  goNextQuestion = () => {
    this.setState({ pointer: this.state.pointer + 1 })
  }

  failQuestion = () => {
    let q = this.state.questions;
    q.push(...q.splice(this.state.pointer, 1));
    this.setState({ questions: q });
  }


  render() {
    let currentQuestion = this.state.questions[this.state.pointer] || 'finished';

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <View style={styles.topWrapper}>
          { currentQuestion !== 'finished' &&
          <Feather
            name='x'
            onPress={() => {
              Alert.alert(
                'Do you want to exit?',
                'Your progress in this lesson will be lost.',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: this.closeModal},
                ],
                { cancelable: true }
              )
            }}
            style={styles.closeButton}
          />
          }
        </View>

        { this.state.pointer !== this.state.questions.length &&
          <ProgressBar current={this.state.pointer} total={this.state.questions.length} />
        }

        { currentQuestion.type === 'multipleChoice' &&
          <MultipleChoice question={currentQuestion} goNextQuestion={this.goNextQuestion} failQuestion={this.failQuestion} />
        }

        { currentQuestion.type === 'typing' &&
          <TypingQuestion question={currentQuestion} goNextQuestion={this.goNextQuestion} failQuestion={this.failQuestion} />
        }

        { currentQuestion === 'finished' && this.state.questions.length &&
          <FinishedDrill closeModal={this.closeModal} user={this.props.user} lessonId={this.props.navigation.getParam('lesson').id} updateUser={this.props.updateUser} lastLesson={this.state.pointer === this.state.questions.length} />
        }
      </SafeAreaView>
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



const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => dispatch(updateUser(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drill);
