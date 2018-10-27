import db from '../firebase/firebaseInit';

import { randomize, flipCoin } from './mathFunctions';

// Get questions for specific drill
const getQuestions = (lessonId, callback) => {
  db.collection('questions').where('lesson_id', '==', lessonId).get()
  .then(snapshot => {
    let questions = snapshot.docs.map(doc => {
      return { ...doc.data(), id: doc.id }
    });
    callback(questions);
  })
  .catch(error => {
    console.log(error);
  })
}

const createQuestions = (questionData, callback) => {
  let questions = [];

  questionData.forEach(data => {
    let question = {};

    if (flipCoin()) {
      question.type = 'typing';
      if (flipCoin()) {
        question.language = 'spanish';
        question.text = data.spanish_answers[0];
        question.correctAnswers = data.english_answers;
      } else {
        question.language = 'english';
        question.text = data.english_answers[0];
        question.correctAnswers = data.spanish_answers;
      }
    } else {
      question.type = 'drill';
      if (flipCoin()) {
        question.language = 'spanish';
        question.text = data.spanish_answers[0];
        question.correctAnswer = data.english_answers[0];
        question.answers = randomize([ ...data.wrong_english_answers, data.english_answers[0]]);
      } else {
        question.language = 'english';
        question.text = data.english_answers[0];
        question.correctAnswer = data.spanish_answers[0];
        question.answers = randomize([ ...data.wrong_spanish_answers, data.spanish_answers[0]]);
      }
    }

    questions.push(question);
  });

  console.log(questions);

  callback(randomize(questions));
}


export { getQuestions, createQuestions }
