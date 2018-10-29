import db from '../firebase/firebaseInit';


const addUserToDatabase = (user, callback) => {

  db.collection('users').doc(user.email).get()
  .then(function(doc) {
      if (doc.exists) { // user already in database
        callback(doc.data(), 'exists');
      } else { // first time signing in, need to add the user
        db.collection('users').doc(user.email).set({ ...user, coins: 0 })
        .then(() => {
          callback(user, 'new_user');
        })
        .catch(error => {
          console.log(error);
        })
      }
  })
  .catch(function(error) {
      console.log(error);
  })
}


export { addUserToDatabase }
