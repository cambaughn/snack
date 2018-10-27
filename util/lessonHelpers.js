import db from '../firebase/firebaseInit';

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


export { getLessons }
