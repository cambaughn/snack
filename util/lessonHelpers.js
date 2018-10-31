import db from '../firebase/firebaseInit';

import { addCoins } from './coinHelpers';



// Get lessons for specific pack
const getLessons = (packId, callback) => {
  db.collection('lessons').where('pack_id', '==', packId).orderBy("order").get()
  .then(snapshot => {
    let lessons = snapshot.docs.map(doc => {
      return { ...doc.data(), id: doc.id }
    });
    callback(lessons);
  })
  .catch(error => {
    console.log(error);
  })
}

// Complete a lesson
const completeLesson = (lessonId, userId, coinCount, coinsToAdd, completedLessons ) => {
  console.log('completing lesson ', lessonId, userId);
  db.collection('completed_lessons').add({
    lesson_id: lessonId,
    user_id: userId
  })
  .then(() => {
    console.log('Completed lesson');
    addCoins(userId, coinCount, coinsToAdd);
    incrementLessonCount(userId, completedLessons);
  })
  .catch(error => {
    console.log(error);
  })
}


// Increment the completed_lessons field on the user document
const incrementLessonCount = (userId, lessonCount) => {
  db.collection('users').doc(userId).update({
    completed_lessons: lessonCount + 1
  })
  .then(() => {
    console.log('Incremented lessons');
  })
  .catch(error => {
    console.log(error);
  })
}


export { getLessons, completeLesson }
