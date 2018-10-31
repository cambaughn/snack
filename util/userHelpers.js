import db from '../firebase/firebaseInit';


const getUser = (userId, callback) => {
  console.log('getting user')
  db.collection('users').doc(userId).get()
  .then(doc => {
    let user = { ...doc.data(), id: doc.id }
    callback(user);
  })
  .catch(function(error) {
    console.log(error);
  })
}



export { getUser }
